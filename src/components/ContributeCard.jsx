import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@camunda/design-system/components/ui/card.js';
import { Button } from '@camunda/design-system/components/ui/button.js';

export function ContributeCard({ title, text, href, cta = 'Start the submission form' }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-foreground-stronger" style={{ margin: '0 0 16px' }}>
          {text}
        </p>
        <Button asChild>
          <a href={href} target="_blank" rel="noopener">
            {cta}
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
