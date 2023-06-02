import React, { useState } from 'react';
import { Accordion, AccordionItem } from '@lump/ui';

export default {
  title: 'Example/Accordion',
  component: Accordion,
};

export const Basic = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Accordion
      activeIndex={activeIndex}
      onChange={(e, index) => {
        setActiveIndex(index);
      }}
    >
      <AccordionItem title="Panel 1">Content 1</AccordionItem>
      <AccordionItem title="Panel 2">Content 2</AccordionItem>
      <AccordionItem title="Panel 3">Content 3</AccordionItem>
    </Accordion>
  );
};
