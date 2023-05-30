import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ListItemButton = ({ className = '', children, ...restProps }) => {
  return (
    <div
      className={classNames(
        'ui-flex ui-px-4 ui-py-2 ui-cursor-pointer hover:ui-bg-light3',
        className,
      )}
      {...restProps}
    >
      {children}
    </div>
  );
};

ListItemButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

ListItemButton.displayName = 'ListItemButton';

export default ListItemButton;
