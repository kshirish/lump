import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TableRow = ({ className = '', children, ...restProps }) => {
  return (
    <tr
      className={classNames(
        'ui-border ui-border-light3 ui-rounded-sm',
        className,
      )}
      {...restProps}
    >
      {children}
    </tr>
  );
};

TableRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

TableRow.displayName = 'TableRow';

export default TableRow;
