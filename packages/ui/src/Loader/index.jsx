import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const sizeMap = {
  sm: 'ui-h-6 ui-w-6',
  md: 'ui-h-8 ui-w-8',
  lg: 'ui-h-12 ui-w-12',
};

export const Loader = ({ size = 'md', className, ...restProps }) => {
  const sizeClass = sizeMap[size];

  return (
    <div
      className={classNames(
        'ui-inline-block ui-animate-spin ui-rounded-full ui-border-4 ui-border-solid ui-border-primary ui-border-r-transparent',
        sizeClass,
        className,
      )}
      {...restProps}
    />
  );
};

Loader.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

Loader.displayName = 'Loader';
