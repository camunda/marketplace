// Browse page: client-side search + facet filtering, synced to the URL.
// The URL is the single source of truth on load and is rewritten on every
// change, so every filtered view (incl. search via ?q= and contributor views
// via ?creatorName=) has a unique, shareable URL.
// Plain JS (no TypeScript annotations) so the dev transform does not break.

function init() {
  const cards = [...document.querySelectorAll('#results .card')];
  const boxes = [...document.querySelectorAll('input[data-facet]')];
  // Free-text search lives on the main page and the browse page. When the
  // box is absent, the ?q= query from the URL still applies.
  const search = document.querySelector('#search');
  const count = document.querySelector('#count');
  const creatorChip = document.querySelector('#creator-filter');
  if (!cards.length || !count) return;

  const params = new URLSearchParams(location.search);

  // Restore state from the URL. Multi-value facets use repeated params,
  // e.g. ?categories=Solution%20Accelerators&categories=Agentic%20Solutions.
  // The contributor filter (?creatorName=, alias ?creator=) is special: the
  // full contributor list would be too long for the sidebar, so it shows as
  // a chip above the results instead of a facet checkbox.
  let query = params.get('q') ?? '';
  if (search) search.value = query;
  let creator = params.get('creatorName') ?? params.get('creator') ?? '';
  for (const box of boxes) {
    box.checked = params.getAll(box.dataset.facet).includes(box.value);
    // Open <details> groups that contain a pre-selected value.
    if (box.checked) box.closest('details')?.setAttribute('open', '');
  }

  function applyFilters() {
    if (search) query = search.value.trim().toLowerCase();
    const q = query.toLowerCase();
    const selected = new Map();
    for (const b of boxes.filter((b) => b.checked)) {
      const facet = b.dataset.facet;
      selected.set(facet, [...(selected.get(facet) ?? []), b.value]);
    }
    let visible = 0;
    for (const card of cards) {
      const textMatch = !q || card.dataset.name.includes(q) || card.dataset.description.includes(q);
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
    if (query) next.set('q', query);
    if (creator) next.set('creatorName', creator);
    for (const b of boxes.filter((b) => b.checked)) {
      next.append(b.dataset.facet, b.value);
    }
    const qs = next.toString();
    history.replaceState(null, '', location.pathname + (qs ? `?${qs}` : ''));
  }

  search?.addEventListener('input', applyFilters);
  for (const b of boxes) b.addEventListener('change', applyFilters);
  creatorChip?.querySelector('button')?.addEventListener('click', () => {
    creator = '';
    applyFilters();
  });

  // Clickable pills on result cards: the contributor pill sets the
  // contributor chip, other pills check the matching facet checkbox.
  document.querySelector('#results')?.addEventListener('click', (e) => {
    const pill = e.target.closest?.('[data-pill-facet],[data-pill-creator]');
    if (!pill) return;
    if (pill.dataset.pillCreator) {
      creator = pill.dataset.pillCreator;
    } else {
      const box = boxes.find(
        (b) => b.dataset.facet === pill.dataset.pillFacet && b.value === pill.dataset.pillValue,
      );
      if (box) {
        box.checked = true;
        box.closest('details')?.setAttribute('open', '');
      }
    }
    applyFilters();
  });
  applyFilters();
}

init();
