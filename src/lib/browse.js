// Browse page: client-side search + facet filtering, synced to the URL.
// The URL is the single source of truth on load and is rewritten on every
// change, so every filtered view (incl. search via ?q= and contributor views
// via ?creatorName=) has a unique, shareable URL.
// Plain JS (no TypeScript annotations) so the dev transform does not break.

function init() {
  const cards = [...document.querySelectorAll('#results .card')];
  const boxes = [...document.querySelectorAll('input[data-facet]')];
  const search = document.querySelector('#search');
  const count = document.querySelector('#count');
  if (!cards.length || !search || !count) return;

  const params = new URLSearchParams(location.search);

  // Restore state from the URL. Multi-value facets use repeated params,
  // e.g. ?categories=Solution%20Accelerators&categories=Agentic%20Solutions.
  // ?creator= is kept as an alias for the contributor facet.
  search.value = params.get('q') ?? '';
  const legacyCreator = params.get('creator');
  for (const box of boxes) {
    box.checked =
      params.getAll(box.dataset.facet).includes(box.value) ||
      (box.dataset.facet === 'creatorName' && box.value === legacyCreator);
    // Open <details> groups that contain a pre-selected value.
    if (box.checked) box.closest('details')?.setAttribute('open', '');
  }

  function applyFilters() {
    const query = search.value.trim().toLowerCase();
    const selected = new Map();
    for (const b of boxes.filter((b) => b.checked)) {
      const facet = b.dataset.facet;
      selected.set(facet, [...(selected.get(facet) ?? []), b.value]);
    }
    let visible = 0;
    for (const card of cards) {
      const textMatch =
        !query || card.dataset.name.includes(query) || card.dataset.description.includes(query);
      const facetMatch = [...selected].every(([facet, values]) => {
        const haystack = (card.dataset[facet] ?? '').split('|');
        return values.some((v) => haystack.includes(v));
      });
      const show = textMatch && facetMatch;
      card.classList.toggle('hidden', !show);
      if (show) visible++;
    }
    count.textContent = `${visible} listing${visible === 1 ? '' : 's'}`;
    syncUrl();
  }

  // Keep the URL in sync so every view is linkable (and the shown filters
  // always match the address bar).
  function syncUrl() {
    const next = new URLSearchParams();
    const query = search.value.trim();
    if (query) next.set('q', query);
    for (const b of boxes.filter((b) => b.checked)) {
      next.append(b.dataset.facet, b.value);
    }
    const qs = next.toString();
    history.replaceState(null, '', location.pathname + (qs ? `?${qs}` : ''));
  }

  search.addEventListener('input', applyFilters);
  for (const b of boxes) b.addEventListener('change', applyFilters);

  // Clickable pills on result cards check the matching facet checkbox.
  document.querySelector('#results')?.addEventListener('click', (e) => {
    const pill = e.target.closest?.('[data-pill-facet]');
    if (!pill) return;
    const box = boxes.find(
      (b) => b.dataset.facet === pill.dataset.pillFacet && b.value === pill.dataset.pillValue,
    );
    if (box) {
      box.checked = true;
      box.closest('details')?.setAttribute('open', '');
    }
    applyFilters();
  });
  applyFilters();
}

init();
