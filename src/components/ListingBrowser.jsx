import React, { useMemo, useState } from 'react';
import { SearchInput } from '@camunda/design-system/components/ui/search-input.js';
import { Checkbox } from '@camunda/design-system/components/ui/checkbox.js';
import { Separator } from '@camunda/design-system/components/ui/separator.js';
import { CreatorBadge, Pill } from './Badges.jsx';

const TYPE_LABELS = { connector: 'Connectors', blueprint: 'Blueprints', solution: 'Solutions' };

/**
 * Interactive browse experience: search + facet filtering over all listings.
 * The single client-side island on the site (Astro `client:load`); listing
 * data is passed in as props from the static build.
 */
export default function ListingBrowser({ listings, facets, initialType }) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(() => (initialType ? { type: [initialType] } : {}));

  const toggle = (facet, value) =>
    setSelected((prev) => {
      const current = prev[facet] ?? [];
      const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
      return { ...prev, [facet]: next };
    });

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return listings.filter((l) => {
      if (q && !l.name.toLowerCase().includes(q) && !l.description.toLowerCase().includes(q)) return false;
      return Object.entries(selected).every(([facet, values]) => {
        if (!values.length) return true;
        const haystack = facet === 'type' ? l.type : (l[facet] ?? []);
        const arr = Array.isArray(haystack) ? haystack : [haystack].filter(Boolean);
        return values.some((v) => arr.includes(v));
      });
    });
  }, [listings, query, selected]);

  return (
    <div className="browser">
      <aside>
        <SearchInput
          placeholder="Search listings…"
          aria-label="Search listings"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onClear={() => setQuery('')}
        />
        <FacetGroup
          label="Type"
          options={['connector', 'blueprint', 'solution']}
          labels={TYPE_LABELS}
          selected={selected.type ?? []}
          onToggle={(v) => toggle('type', v)}
        />
        {facets.map(({ label, key, values }) =>
          values.length ? (
            <FacetGroup
              key={key}
              label={label}
              options={values}
              selected={selected[key] ?? []}
              onToggle={(v) => toggle(key, v)}
              collapsible
            />
          ) : null,
        )}
      </aside>

      <section>
        <p className="count">
          {visible.length} listing{visible.length === 1 ? '' : 's'}
        </p>
        <ul className="results">
          {visible.map((l) => (
            <li key={l.slug}>
              <a href={l.href} className="row">
                {l.icon && <img src={l.icon} alt="" width="48" height="48" loading="lazy" />}
                <div className="rowBody">
                  <h3>{l.name}</h3>
                  <p>{l.description}</p>
                  <span className="meta">
                    <CreatorBadge creatorType={l.creatorType} />
                    {l.creatorName && <Pill>{l.creatorName}</Pill>}
                    {l.compatibleVersions[0] && <Pill>Camunda {l.compatibleVersions[0]}+</Pill>}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function FacetGroup({ label, options, labels = {}, selected, onToggle, collapsible = false }) {
  const content = (
    <div className="options">
      {options.map((v) => (
        <label key={v} className="option">
          <Checkbox checked={selected.includes(v)} onCheckedChange={() => onToggle(v)} />
          <span>{labels[v] ?? (v[0].toUpperCase() + v.slice(1))}</span>
        </label>
      ))}
    </div>
  );
  return (
    <div className="group">
      {collapsible ? (
        <details>
          <summary>{label}</summary>
          {content}
        </details>
      ) : (
        <>
          <h3>{label}</h3>
          {content}
        </>
      )}
      <Separator className="groupSeparator" />
    </div>
  );
}
