import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from '@lump/ui';

export default {
  title: 'Example/Tab',
  component: Tab,
};

export const Basic = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <Tabs activeIndex={activeIndex}>
      <TabList
        onChange={(e, index) => {
          setActiveIndex(index);
        }}
      >
        <Tab>Tab Link 1</Tab>
        <Tab>Tab Link 2</Tab>
        <Tab>Tab Link 3</Tab>
      </TabList>
      <TabPanel>Content 1</TabPanel>
      <TabPanel>Content 2</TabPanel>
      <TabPanel>Content 3</TabPanel>
    </Tabs>
  );
};
