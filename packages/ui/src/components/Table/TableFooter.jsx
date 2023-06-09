import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TableFooter = ({ className = '', children, ...restProps }) => {
  return (
    <tfoot className={classNames('', className)} {...restProps}>
      {children}
    </tfoot>
  );
};

TableFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

TableFooter.displayName = 'TableFooter';

export default TableFooter;
