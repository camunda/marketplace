import React from 'react';
import { Button } from '@camunda/design-system/components/ui/button.js';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@camunda/design-system/components/ui/collapsible.js';

export function GuideDisclosure({ children }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen} style={{ marginTop: 32 }}>
      <CollapsibleTrigger asChild>
        <Button variant="secondary">{open ? 'Hide the submission guide' : 'How to create a submission'}</Button>
      </CollapsibleTrigger>
      <CollapsibleContent style={{ marginTop: 24 }}>{children}</CollapsibleContent>
    </Collapsible>
  );
}
