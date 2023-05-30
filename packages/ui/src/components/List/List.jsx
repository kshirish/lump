import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const List = ({ className = '', children, ...restProps }) => {
  return (
    <div
      className={classNames('ui-bg-white ui-py-2', className)}
      {...restProps}
    >
      {children}
    </div>
  );
};

List.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

List.displayName = 'List';

export default List;
