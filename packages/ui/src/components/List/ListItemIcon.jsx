import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ListItemIcon = ({ className = '', children, ...restProps }) => {
  return (
    <div className={classNames('ui-mr-4', className)} {...restProps}>
      {children}
    </div>
  );
};

ListItemIcon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

ListItemIcon.displayName = 'ListItemIcon';

export default ListItemIcon;
