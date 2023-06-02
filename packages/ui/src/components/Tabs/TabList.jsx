import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TabList = ({
  children,
  className = '',
  onChange = () => {},
  ...restProps
}) => {
  return (
    <ul
      className={classNames('ui-flex ui-flex-wrap ui--mb-px', className)}
      onChange={onChange}
      {...restProps}
    >
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          index,
          onChange,
        });
      })}
    </ul>
  );
};

TabList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onChange: PropTypes.func,
};

TabList.displayName = 'TabList';

export default TabList;
