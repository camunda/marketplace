// Browse page: client-side search + facet filtering, synced to the URL.
// The URL is the single source of truth on load and is rewritten on every
// change, so every filtered view (incl. search via ?q= and contributor views
// via ?creator=) has a unique, shareable URL.
// Plain JS (no TypeScript annotations) so the dev transform does not break.

function init() {
  const cards = [...document.querySelectorAll('#results .card')];
  const boxes = [...document.querySelectorAll('input[data-facet]')];
  const search = document.querySelector('#search');
  const count = document.querySelector('#count');
  const creatorChip = document.querySelector('#creator-filter');
  if (!cards.length || !search || !count) return;

  const params = new URLSearchParams(location.search);

  // Restore state from the URL. Multi-value facets use repeated params,
  // e.g. ?categories=Solution%20Accelerators&categories=Agentic%20Solutions.
  search.value = params.get('q') ?? '';
  for (const box of boxes) {
    box.checked = params.getAll(box.dataset.facet).includes(box.value);
    // Open <details> groups that contain a pre-selected value.
    if (box.checked) box.closest('details')?.setAttribute('open', '');
  }
  let creator = params.get('creator') ?? '';

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
      const creatorMatch = !creator || card.dataset.creator === creator;
      const facetMatch = [...selected].every(([facet, values]) => {
        const haystack = (card.dataset[facet] ?? '').split('|');
        return values.some((v) => haystack.includes(v));
      });
      const show = textMatch && creatorMatch && facetMatch;
      card.classList.toggle('hidden', !show);
      if (show) visible++;
    }
    count.textContent = `${visible} listing${visible === 1 ? '' : 's'}`;
    updateCreatorChip();
    syncUrl();
  }

  function updateCreatorChip() {
    if (!creatorChip) return;
    creatorChip.hidden = !creator;
    const label = creatorChip.querySelector('[data-creator-name]');
    if (label) label.textContent = creator;
  }

  // Keep the URL in sync so every view is linkable (and the shown filters
  // always match the address bar).
  function syncUrl() {
    const next = new URLSearchParams();
    const query = search.value.trim();
    if (query) next.set('q', query);
    if (creator) next.set('creator', creator);
    for (const b of boxes.filter((b) => b.checked)) {
      next.append(b.dataset.facet, b.value);
    }
    const qs = next.toString();
    history.replaceState(null, '', location.pathname + (qs ? `?${qs}` : ''));
  }

  search.addEventListener('input', applyFilters);
  for (const b of boxes) b.addEventListener('change', applyFilters);
  creatorChip?.querySelector('button')?.addEventListener('click', () => {
    creator = '';
    applyFilters();
  });
  applyFilters();
}

init();
