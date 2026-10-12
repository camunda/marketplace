import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@camunda/design-system/components/ui/card.js';

/**
 * Server-rendered DS card for a marketplace listing. Rendered to static HTML
 * by Astro at build time - no client-side React. `href` makes the whole card
 * a link via a stretched anchor.
 */
export function ListingCard({ href, icon, name, description }) {
  return (
    <a href={href} className="block group no-underline">
      <Card className="h-full transition-shadow group-hover:shadow-md">
        <CardHeader>
          {icon ? (
            <img
              src={icon}
              alt=""
              className="h-10 w-10 shrink-0 rounded object-contain"
            />
          ) : null}
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="line-clamp-3">{description}</CardDescription>
        </CardContent>
      </Card>
    </a>
  );
}
