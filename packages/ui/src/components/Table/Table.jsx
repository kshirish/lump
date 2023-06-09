import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Table = ({ className = '', children, ...restProps }) => {
  return (
    <table
      className={classNames('ui-w-full ui-text-left ui-text-light2', className)}
      {...restProps}
    >
      {children}
    </table>
  );
};

Table.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Table.displayName = 'Table';

export default Table;
