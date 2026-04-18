/* =============================================================
 * script.js — Logica del Glossario Esperimenti ELAB Tutor
 * =============================================================
 * Funzionalità:
 *   1) Rendering del grid di esperimenti raggruppati per capitolo
 *   2) Filtri tab per volume (tutti / 1 / 2 / 3)
 *   3) Ricerca in tempo reale su titolo, descrizione, id, capitolo
 *   4) Evidenziazione dei match nella ricerca
 *   5) Empty state quando nessun risultato
 *   6) Stato riflesso nell'URL (?volume=2&q=pulsante) per condivisione
 *   7) GLOSSARIO: clic su una card → apre un modale con dettaglio
 *      dell'esperimento + sezione "Glossario dell'esperimento" che
 *      elenca tutti i termini tecnici rilevanti, ciascuno con
 *      definizione per bambini, esempio, lettura vocale e link UNLIM.
 *
 * Dipende da:
 *   data.js     — definisce EXPERIMENTS e VOLUMES
 *   glossary.js — definisce GLOSSARY (mappa termine → definizione)
 * ============================================================= */

(() => {
  'use strict';

  // ----- Stato applicazione -----
  const state = {
    volume: 'all',
    query: '',
    openExpId: null, // id dell'esperimento attualmente aperto nel modale
  };

  // ----- Riferimenti DOM -----
  const resultsEl = document.getElementById('results');
  const emptyStateEl = document.getElementById('empty-state');
  const searchInputEl = document.getElementById('search-input');
  const clearSearchEl = document.getElementById('clear-search');
  const searchBoxEl = document.querySelector('.search-box');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const resultCountEl = document.getElementById('result-count');
  const statTotalEl = document.getElementById('stat-total');
  const statChaptersEl = document.getElementById('stat-chapters');
  const modalBackdropEl = document.getElementById('modal-backdrop');

  // ============================================================
  // 0) GLOSSARIO — indice aliases → key
  // ============================================================

  let aliasToKey = {};
  let sortedAliases = [];
  let glossRegex = null;

  function buildGlossaryIndex() {
    aliasToKey = {};
    sortedAliases = [];
    for (const [key, entry] of Object.entries(GLOSSARY)) {
      for (const alias of entry.aliases) {
        aliasToKey[alias.toLowerCase()] = key;
        sortedAliases.push(alias);
      }
    }
    sortedAliases.sort((a, b) => b.length - a.length);
    const escaped = sortedAliases.map(escapeRegex).join('|');
    glossRegex = new RegExp(
      `(?<![A-Za-zÀ-ÿ0-9_])(${escaped})(?![A-Za-zÀ-ÿ0-9])`,
      'gi'
    );
  }

  /**
   * Estrae i termini del glossario presenti nel testo.
   * Restituisce un array ordinato di { key, matched } per la PRIMA
   * occorrenza di ciascuna voce nel testo.
   */
  function extractTerms(text) {
    if (!text || !glossRegex) return [];
    const seen = new Set();
    const terms = [];
    text.replace(glossRegex, (match) => {
      const key = aliasToKey[match.toLowerCase()];
      if (key && !seen.has(key)) {
        seen.add(key);
        terms.push({ key, matched: match });
      }
      return match;
    });
    return terms;
  }

  // ============================================================
  // 1) HELPERS
  // ============================================================

  function difficultyLabel(level) {
    return { 1: 'Facile', 2: 'Medio', 3: 'Avanzato' }[level] || 'N/A';
  }

  function highlight(text, query) {
    if (!query || !text) return escapeHtml(text);
    const q = escapeRegex(query);
    const re = new RegExp(`(${q})`, 'gi');
    return escapeHtml(text).replace(re, '<span class="match-highlight">$1</span>');
  }

  function escapeHtml(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function escapeRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function filterExperiments() {
    return EXPERIMENTS.filter(e => {
      if (state.volume !== 'all' && String(e.volume) !== state.volume) return false;
      if (state.query) {
        const haystack = [e.title, e.description, e.id, e.chapter].join(' ').toLowerCase();
        if (!haystack.includes(state.query)) return false;
      }
      return true;
    });
  }

  function groupByChapter(experiments) {
    const groups = new Map();
    for (const exp of experiments) {
      const key = `${exp.volume}::${exp.chapter}`;
      if (!groups.has(key)) groups.set(key, { volume: exp.volume, chapter: exp.chapter, items: [] });
      groups.get(key).items.push(exp);
    }
    return Array.from(groups.values());
  }

  // ============================================================
  // 2) RENDERING — GRID DELLE CARD
  // ============================================================

  function cardHTML(exp) {
    const q = state.query;
    const titleHTML = highlight(exp.title, q);
    const descHTML = highlight(exp.description, q);
    const idHTML = highlight(exp.id, q);
    const volIcon = VOLUMES[exp.volume].icon;

    const dotsHTML = [1, 2, 3].map(i =>
      `<span class="dot${i <= exp.difficulty ? ' filled' : ''}"></span>`
    ).join('');

    const capstoneBadge = exp.isCapstone
      ? `<span class="badge badge-capstone" title="Progetto avanzato di fine volume">⭐ Progetto avanzato</span>`
      : '';

    // N° di termini di glossario contenuti nella descrizione (per hint utente)
    const termCount = extractTerms(exp.description).length;
    const glossHint = termCount > 0
      ? `<span class="gloss-hint" aria-label="${termCount} termini nel glossario">📖 ${termCount}</span>`
      : '';

    return `
      <article class="exp-card vol-${exp.volume}" data-id="${exp.id}" tabindex="0" role="button" aria-label="Apri dettaglio di ${escapeHtml(exp.title)}">
        <div class="card-top">
          <div class="icon" aria-hidden="true">${exp.icon}</div>
          <span class="vol-tag">${volIcon} Vol ${exp.volume}</span>
        </div>
        <h3>${titleHTML}</h3>
        <div class="exp-id">${idHTML}</div>
        <p class="description">${descHTML}</p>
        <div class="badges">
          <span class="badge badge-difficulty" data-level="${exp.difficulty}"
                title="Difficoltà: ${difficultyLabel(exp.difficulty)}">
            <span class="dots">${dotsHTML}</span>
            ${difficultyLabel(exp.difficulty)}
          </span>
          <span class="badge" title="Durata stimata">⏱️ ${exp.minutes} min</span>
          <span class="badge" title="Numero di componenti">🧩 ${exp.components} comp</span>
          ${capstoneBadge}
          ${glossHint}
        </div>
      </article>
    `;
  }

  function chapterGroupHTML(group) {
    const cards = group.items.map(cardHTML).join('');
    return `
      <section class="chapter-group">
        <header class="chapter-header vol-${group.volume}">
          <h2>${escapeHtml(group.chapter)}</h2>
          <span class="chapter-count">${group.items.length} esperiment${group.items.length === 1 ? 'o' : 'i'}</span>
        </header>
        <div class="experiments-grid">${cards}</div>
      </section>
    `;
  }

  function render() {
    const filtered = filterExperiments();
    const groups = groupByChapter(filtered);

    const count = filtered.length;
    if (state.query || state.volume !== 'all') {
      const totalExpr = EXPERIMENTS.length;
      resultCountEl.innerHTML = `<strong>${count}</strong> su ${totalExpr} esperimenti`;
      if (state.query) {
        resultCountEl.innerHTML += ` per <em>"${escapeHtml(state.query)}"</em>`;
      }
    } else {
      resultCountEl.innerHTML = `<strong>${count}</strong> esperimenti mostrati`;
    }

    if (count === 0) {
      resultsEl.innerHTML = '';
      emptyStateEl.style.display = 'block';
    } else {
      emptyStateEl.style.display = 'none';
      resultsEl.innerHTML = groups.map(chapterGroupHTML).join('');
    }

    const uniqueChapters = new Set(EXPERIMENTS.map(e => `${e.volume}-${e.chapter}`)).size;
    statChaptersEl.textContent = uniqueChapters;
    statTotalEl.textContent = EXPERIMENTS.length;
  }

  function updateFilterCounts() {
    const byVol = { all: EXPERIMENTS.length, 1: 0, 2: 0, 3: 0 };
    EXPERIMENTS.forEach(e => { byVol[e.volume]++; });
    document.getElementById('count-all').textContent = byVol.all;
    document.getElementById('count-1').textContent = byVol[1];
    document.getElementById('count-2').textContent = byVol[2];
    document.getElementById('count-3').textContent = byVol[3];
  }

  // ============================================================
  // 3) MODALE — DETTAGLIO ESPERIMENTO + GLOSSARIO
  // ============================================================

  /**
   * Crea il markup di una singola card di termine del glossario
   * (usata dentro la sezione glossario del modale)
   */
  function glossTermCardHTML(termKey) {
    const data = GLOSSARY[termKey];
    if (!data) return '';
    return `
      <div class="gloss-card">
        <div class="gloss-card-head">
          <div class="gloss-card-icon" aria-hidden="true">${data.icon}</div>
          <div class="gloss-card-titles">
            <div class="gloss-card-title">${escapeHtml(data.title)}</div>
            <div class="gloss-card-tech">${escapeHtml(data.technical)}</div>
          </div>
          <span class="gloss-card-voltag" data-vol="${data.volume}">Vol ${data.volume}</span>
        </div>
        <div class="gloss-card-body">${escapeHtml(data.kid)}</div>
        <div class="gloss-card-example">💭 ${escapeHtml(data.example)}</div>
        <div class="gloss-card-actions">
          <button class="btn-speak" type="button" data-kid="${escapeHtml(data.title + '. ' + data.kid)}">🔊 Ascolta</button>
          <button class="btn-unlim" type="button" data-term="${escapeHtml(data.title)}">💬 Chiedi a UNLIM</button>
        </div>
      </div>
    `;
  }

  /**
   * Costruisce la sezione glossario per un esperimento dato
   */
  function glossarySectionHTML(exp) {
    const terms = extractTerms(exp.description);
    if (terms.length === 0) {
      return `
        <section class="modal-glossary">
          <h3>📖 Glossario dell'esperimento</h3>
          <p class="glossary-empty">Questo esperimento non contiene termini tecnici del glossario. La descrizione usa solo parole di uso comune — perfetta per chi sta iniziando!</p>
        </section>
      `;
    }
    const cards = terms.map(t => glossTermCardHTML(t.key)).join('');
    return `
      <section class="modal-glossary">
        <h3>📖 Glossario dell'esperimento <span class="glossary-count">${terms.length} termin${terms.length === 1 ? 'e' : 'i'}</span></h3>
        <div class="gloss-cards-grid">${cards}</div>
      </section>
    `;
  }

  /**
   * Costruisce l'intero contenuto del modale
   */
  function modalContentHTML(exp) {
    const volData = VOLUMES[exp.volume];
    const dotsHTML = [1, 2, 3].map(i =>
      `<span class="dot${i <= exp.difficulty ? ' filled' : ''}"></span>`
    ).join('');
    const capstoneBadge = exp.isCapstone
      ? `<span class="badge badge-capstone">⭐ Progetto avanzato</span>`
      : '';

    // Navigazione prev/next
    const { prev, next, position, total } = getNeighbors(exp.id);
    const prevBtn = prev
      ? `<button class="modal-nav-btn modal-nav-prev" data-target="${prev.id}" title="${escapeHtml(prev.title)} (←)">
           <span aria-hidden="true">←</span>
           <span class="nav-label">Precedente</span>
         </button>`
      : `<button class="modal-nav-btn" disabled><span aria-hidden="true">←</span><span class="nav-label">Precedente</span></button>`;
    const nextBtn = next
      ? `<button class="modal-nav-btn modal-nav-next" data-target="${next.id}" title="${escapeHtml(next.title)} (→)">
           <span class="nav-label">Successivo</span>
           <span aria-hidden="true">→</span>
         </button>`
      : `<button class="modal-nav-btn" disabled><span class="nav-label">Successivo</span><span aria-hidden="true">→</span></button>`;

    return `
      <div class="modal-panel vol-${exp.volume}" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button class="modal-close" aria-label="Chiudi dettaglio (Esc)">×</button>

        <nav class="modal-nav" aria-label="Naviga tra esperimenti">
          ${prevBtn}
          <div class="modal-nav-center">
            <span class="modal-nav-position">${position} / ${total}</span>
            <button class="modal-copy-link" type="button" title="Copia link a questo esperimento" aria-label="Copia link">
              🔗 <span class="copy-label">Copia link</span>
            </button>
          </div>
          ${nextBtn}
        </nav>

        <header class="modal-header">
          <div class="modal-icon" aria-hidden="true">${exp.icon}</div>
          <div class="modal-header-text">
            <div class="modal-breadcrumb">
              <span class="vol-tag">${volData.icon} Vol ${exp.volume} · ${escapeHtml(volData.name)}</span>
              <span class="chap-tag">${escapeHtml(exp.chapter)}</span>
            </div>
            <h2 id="modal-title">${escapeHtml(exp.title)}</h2>
            <div class="modal-id">${escapeHtml(exp.id)}</div>
          </div>
        </header>

        <p class="modal-description">${escapeHtml(exp.description)}</p>

        <div class="modal-metadata">
          <span class="badge badge-difficulty" data-level="${exp.difficulty}">
            <span class="dots">${dotsHTML}</span>
            ${difficultyLabel(exp.difficulty)}
          </span>
          <span class="badge">⏱️ ${exp.minutes} min</span>
          <span class="badge">🧩 ${exp.components} componenti</span>
          ${capstoneBadge}
        </div>

        ${glossarySectionHTML(exp)}

        <footer class="modal-footer-hint">
          <kbd>←</kbd> <kbd>→</kbd> per navigare · <kbd>Esc</kbd> per chiudere
        </footer>
      </div>
    `;
  }

  /**
   * Restituisce prev/next esperimento nella lista attualmente filtrata.
   * Se l'esperimento non è nella lista filtrata, usa l'intero EXPERIMENTS.
   */
  function getNeighbors(expId) {
    const filtered = filterExperiments();
    const list = filtered.find(e => e.id === expId) ? filtered : EXPERIMENTS;
    const idx = list.findIndex(e => e.id === expId);
    return {
      prev: idx > 0 ? list[idx - 1] : null,
      next: idx >= 0 && idx < list.length - 1 ? list[idx + 1] : null,
      position: idx + 1,
      total: list.length,
    };
  }

  function openModal(expId) {
    const exp = EXPERIMENTS.find(e => e.id === expId);
    if (!exp) return;
    state.openExpId = expId;
    modalBackdropEl.innerHTML = modalContentHTML(exp);
    modalBackdropEl.classList.add('open');
    document.documentElement.classList.add('modal-open');
    document.body.classList.add('modal-open');
    updateURL(); // sincronizza URL con ?exp=...

    // Focus sul pulsante di chiusura per accessibilità
    setTimeout(() => {
      const closeBtn = modalBackdropEl.querySelector('.modal-close');
      if (closeBtn) closeBtn.focus();
    }, 50);

    wireModalButtons();
  }

  /**
   * Sostituisce il contenuto del modale (senza chiuderlo) con un altro
   * esperimento. Usato da prev/next.
   */
  function switchModalTo(expId) {
    const exp = EXPERIMENTS.find(e => e.id === expId);
    if (!exp) return;
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    state.openExpId = expId;
    updateURL();
    // Scrolla il backdrop in cima così la nuova card si vede subito
    modalBackdropEl.scrollTop = 0;
    modalBackdropEl.innerHTML = modalContentHTML(exp);
    wireModalButtons();
  }

  /**
   * Collega tutti i pulsanti interni al modale: close, prev/next, audio, UNLIM.
   */
  function wireModalButtons() {
    const closeBtn = modalBackdropEl.querySelector('.modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    const prevBtn = modalBackdropEl.querySelector('.modal-nav-prev');
    if (prevBtn) prevBtn.addEventListener('click', () => {
      const expId = prevBtn.dataset.target;
      if (expId) switchModalTo(expId);
    });

    const nextBtn = modalBackdropEl.querySelector('.modal-nav-next');
    if (nextBtn) nextBtn.addEventListener('click', () => {
      const expId = nextBtn.dataset.target;
      if (expId) switchModalTo(expId);
    });

    modalBackdropEl.querySelectorAll('.btn-speak').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const text = e.currentTarget.dataset.kid;
        if ('speechSynthesis' in window) {
          speechSynthesis.cancel();
          const u = new SpeechSynthesisUtterance(text);
          u.lang = 'it-IT';
          u.rate = 0.95;
          speechSynthesis.speak(u);
        } else {
          alert('Lettura vocale non disponibile su questo browser.');
        }
      });
    });

    modalBackdropEl.querySelectorAll('.btn-unlim').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const term = e.currentTarget.dataset.term;
        alert(`In ELAB Tutor integrato: apre la chat di UNLIM pre-riempita con\n"Spiegami meglio ${term}".`);
      });
    });

    const copyBtn = modalBackdropEl.querySelector('.modal-copy-link');
    if (copyBtn) copyBtn.addEventListener('click', () => {
      const url = window.location.href;
      const done = () => {
        const lbl = copyBtn.querySelector('.copy-label');
        const original = lbl ? lbl.textContent : 'Copia link';
        if (lbl) lbl.textContent = '✓ Copiato!';
        copyBtn.classList.add('copied');
        setTimeout(() => {
          if (lbl) lbl.textContent = original;
          copyBtn.classList.remove('copied');
        }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(done).catch(() => {
          // Fallback: selezione testo
          prompt('Copia questo link manualmente:', url);
        });
      } else {
        prompt('Copia questo link manualmente:', url);
      }
    });
  }

  function closeModal() {
    state.openExpId = null;
    modalBackdropEl.classList.remove('open');
    document.documentElement.classList.remove('modal-open');
    document.body.classList.remove('modal-open');
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    updateURL(); // rimuovi ?exp=... dall'URL
    setTimeout(() => {
      if (!modalBackdropEl.classList.contains('open')) modalBackdropEl.innerHTML = '';
    }, 200);
  }

  // ============================================================
  // 4) EVENT HANDLERS
  // ============================================================

  function onFilterClick(e) {
    const btn = e.currentTarget;
    const vol = btn.dataset.volume;
    if (vol === state.volume) return;
    filterBtns.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    state.volume = vol;
    updateURL();
    render();
  }

  let searchDebounceTimer = null;
  function onSearchInput(e) {
    const val = e.target.value.trim();
    searchBoxEl.classList.toggle('has-query', val.length > 0);
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(() => {
      state.query = val.toLowerCase();
      updateURL();
      render();
    }, 120);
  }

  function onClearSearch() {
    searchInputEl.value = '';
    searchBoxEl.classList.remove('has-query');
    state.query = '';
    updateURL();
    render();
    searchInputEl.focus();
  }

  function updateURL() {
    const params = new URLSearchParams();
    if (state.volume !== 'all') params.set('volume', state.volume);
    if (state.query) params.set('q', state.query);
    if (state.openExpId) params.set('exp', state.openExpId);
    const queryStr = params.toString();
    const newUrl = window.location.pathname + (queryStr ? '?' + queryStr : '');
    window.history.replaceState({}, '', newUrl);
  }

  function readInitialStateFromURL() {
    const params = new URLSearchParams(window.location.search);
    const vol = params.get('volume');
    const q = params.get('q');
    const expId = params.get('exp');
    if (['1', '2', '3'].includes(vol)) {
      state.volume = vol;
      filterBtns.forEach(b => {
        const match = b.dataset.volume === vol;
        b.classList.toggle('active', match);
        b.setAttribute('aria-selected', String(match));
      });
    }
    if (q) {
      state.query = q.toLowerCase();
      searchInputEl.value = q;
      searchBoxEl.classList.add('has-query');
    }
    // Se c'è ?exp=... apri il modale (dopo il render iniziale)
    if (expId && EXPERIMENTS.find(e => e.id === expId)) {
      setTimeout(() => openModal(expId), 100);
    }
  }

  /**
   * Delegation: click su una card → apri modale
   */
  function onResultsClick(e) {
    const card = e.target.closest('.exp-card');
    if (card) {
      openModal(card.dataset.id);
    }
  }

  /**
   * Supporto tastiera: Invio/Spazio sulla card aprono il modale
   */
  function onResultsKeydown(e) {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('exp-card')) {
      e.preventDefault();
      openModal(e.target.dataset.id);
    }
  }

  /**
   * Click sul backdrop (fuori dal panel) → chiudi
   */
  function onBackdropClick(e) {
    if (e.target === modalBackdropEl) closeModal();
  }

  function onDocumentKeydown(e) {
    if (e.key === 'Escape') {
      if (state.openExpId) { closeModal(); return; }
      if (document.activeElement === searchInputEl && searchInputEl.value) onClearSearch();
      return;
    }
    // Frecce dentro il modale: prev/next
    if (state.openExpId && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
      // Non sovrascrivere se l'utente sta scrivendo in un input
      const tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea') return;
      e.preventDefault();
      const { prev, next } = getNeighbors(state.openExpId);
      if (e.key === 'ArrowLeft' && prev) switchModalTo(prev.id);
      if (e.key === 'ArrowRight' && next) switchModalTo(next.id);
    }
  }

  // ============================================================
  // 5) INIT
  // ============================================================

  function init() {
    buildGlossaryIndex();

    filterBtns.forEach(btn => btn.addEventListener('click', onFilterClick));
    searchInputEl.addEventListener('input', onSearchInput);
    clearSearchEl.addEventListener('click', onClearSearch);
    resultsEl.addEventListener('click', onResultsClick);
    resultsEl.addEventListener('keydown', onResultsKeydown);
    modalBackdropEl.addEventListener('click', onBackdropClick);
    document.addEventListener('keydown', onDocumentKeydown);

    updateFilterCounts();
    readInitialStateFromURL();
    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
