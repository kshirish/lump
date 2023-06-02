import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { TabContext } from './context';

const TabPanel = ({ index, children, className = '', ...restProps }) => {
  const activeIndex = useContext(TabContext);

  const active = index === activeIndex;

  return (
    <div
      className={classNames(
        '',
        { 'ui-block': active, 'ui-hidden': !active },
        className,
      )}
      {...restProps}
    >
      {children}
    </div>
  );
};

TabPanel.propTypes = {
  index: PropTypes.number.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

TabPanel.displayName = 'TabPanel';

export default TabPanel;
