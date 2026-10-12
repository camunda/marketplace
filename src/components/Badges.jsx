import React from 'react';
import { Badge } from '@camunda/design-system/components/ui/badge.js';

// Map creator type to a distinct DS badge variant.
const CREATOR_VARIANT = { camunda: 'primary', partner: 'accent', community: 'success' };

/** Colored creator badge (Camunda / Partner / Community). */
export function CreatorBadge({ creatorType }) {
  if (!creatorType) return null;
  const label = creatorType[0].toUpperCase() + creatorType.slice(1);
  return <Badge variant={CREATOR_VARIANT[creatorType] ?? 'neutral'}>{label}</Badge>;
}

/** Neutral facet pill (creator name, version, availability, ...). */
export function Pill({ children }) {
  return <Badge variant="neutral">{children}</Badge>;
}
