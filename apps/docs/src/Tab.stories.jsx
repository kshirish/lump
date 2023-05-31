import React from 'react';
import { Tabs, Tab } from '@lump/ui';

export default {
  title: 'Example/Tab',
  component: Tab,
};

export const Basic = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <Tabs
      activeIndex={activeIndex}
      onChange={({ activeIndex }) => {
        setActiveIndex(activeIndex);
      }}
    >
      <Tab title="Tab Link 1">Content 1</Tab>
      <Tab title="Tab Link 2">Content 2</Tab>
      <Tab title="Tab Link 3">Content 3</Tab>
    </Tabs>
  );
};
