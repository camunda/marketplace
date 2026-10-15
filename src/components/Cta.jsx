import React from 'react';
import { Button } from '@camunda/design-system/components/ui/button.js';

/**
 * A call-to-action rendered as a DS Button wrapping a link.
 * `primary` maps to the default variant, secondary actions to "secondary".
 */
export function Cta({ href, primary = false, external = false, size, children }) {
  return (
    <Button variant={primary ? 'default' : 'secondary'} size={size} asChild>
      <a href={href} {...(external ? { target: '_blank', rel: 'noopener' } : {})}>
        {children}
      </a>
    </Button>
  );
}
