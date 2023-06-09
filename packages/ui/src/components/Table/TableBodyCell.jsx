import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TableBodyCell = ({ className = '', children, ...restProps }) => {
  return (
    <td className={classNames('ui-px-3 ui-py-2', className)} {...restProps}>
      {children}
    </td>
  );
};

TableBodyCell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

TableBodyCell.displayName = 'TableBodyCell';

export default TableBodyCell;
