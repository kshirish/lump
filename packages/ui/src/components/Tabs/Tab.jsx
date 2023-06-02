import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { TabContext } from './context';

const Tab = ({ index, children, className = '', onChange, ...restProps }) => {
  const activeIndex = useContext(TabContext);

  const active = index === activeIndex;

  return (
    <li className={classNames('ui-mr-2', className)} {...restProps}>
      <a
        href="#"
        className={classNames(
          'ui-inline-block ui-p-3 ui-border-b-2 ui-rounded-t-lg hover:ui-text-body hover:ui-border-light2',
          {
            'ui-text-primary ui-border-primary': active,
            'ui-border-transparent': !active,
          },
          className,
        )}
        onClick={(e) => {
          e.preventDefault();
          onChange(e, index);
        }}
      >
        {children}
      </a>
    </li>
  );
};

Tab.propTypes = {
  index: PropTypes.number.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onChange: PropTypes.func,
};

Tab.displayName = 'Tab';

export default Tab;
