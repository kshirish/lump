import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TableHeader = ({ className = '', children, ...restProps }) => {
  return (
    <thead
      className={classNames(
        'ui-text-white ui-bg-light1 ui-rounded-sm',
        className,
      )}
      {...restProps}
    >
      {children}
    </thead>
  );
};

TableHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

TableHeader.displayName = 'TableHeader';

export default TableHeader;
