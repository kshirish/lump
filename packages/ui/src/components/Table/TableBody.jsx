import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TableBody = ({ className = '', children, ...restProps }) => {
  return (
    <tbody
      className={classNames('ui-bg-white ui-text-body', className)}
      {...restProps}
    >
      {children}
    </tbody>
  );
};

TableBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

TableBody.displayName = 'TableBody';

export default TableBody;
