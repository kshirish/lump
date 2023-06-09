import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TableHeaderCell = ({ className = '', children, ...restProps }) => {
  return (
    <th className={classNames('ui-px-3 ui-py-2', className)} {...restProps}>
      {children}
    </th>
  );
};

TableHeaderCell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

TableHeaderCell.displayName = 'TableHeaderCell';

export default TableHeaderCell;
