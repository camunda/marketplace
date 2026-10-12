// Browse page: client-side search + facet filtering.
// Plain JS (no TypeScript annotations) so the dev transform does not break.

function init() {
  const cards = [...document.querySelectorAll('#results .card')];
  const boxes = [...document.querySelectorAll('input[data-facet]')];
  const search = document.querySelector('#search');
  const count = document.querySelector('#count');
  if (!cards.length || !search || !count) return;

  // Preselect ?type= from the URL (used by the navigation links).
  const initialType = new URLSearchParams(location.search).get('type');
  if (initialType) {
    const box = boxes.find((b) => b.dataset.facet === 'type' && b.value === initialType);
    if (box) box.checked = true;
  }

  // Card data attributes are kebab-case (data-creator-type); the DOM exposes
  // them as camelCase dataset properties, which matches the facet keys.
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
      card.classList.toggle('hidden', !(textMatch && facetMatch));
      if (textMatch && facetMatch) visible++;
    }
    count.textContent = `${visible} listing${visible === 1 ? '' : 's'}`;
  }

  search.addEventListener('input', applyFilters);
  for (const b of boxes) b.addEventListener('change', applyFilters);
  applyFilters();
}

init();
