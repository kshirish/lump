import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Text } from '../';
import { TabContext } from './context';

const Tabs = ({ activeIndex, children, className = '', ...restProps }) => {
  const [tabList, ...tabPanels] = React.Children.toArray(children);

  return (
    <TabContext.Provider value={activeIndex}>
      <Text
        color="light"
        className="ui-text-center ui-border-b ui-border-light3"
      >
        {tabList}
      </Text>
      <div className={classNames('ui-p-2', className)} {...restProps}>
        {React.Children.map(tabPanels, (child, index) => {
          return React.cloneElement(child, {
            index,
          });
        })}
      </div>
    </TabContext.Provider>
  );
};

Tabs.propTypes = {
  activeIndex: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Tabs.displayName = 'Tabs';

export default Tabs;
