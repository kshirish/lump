import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const elevationMap = [
  'ui-shadow-xs',
  'ui-shadow-sm',
  'ui-shadow',
  'ui-shadow-md',
  'ui-shadow-lg',
  'ui-shadow-xl',
  'ui-shadow-2xl',
];

const Paper = ({ elevation, children, className = '', ...restProps }) => {
  const elevationClass = elevationMap[elevation ? elevation - 1 : 3];

  return (
    <div
      className={classNames(
        'ui-p-4 ui-bg-white ui-rounded-md',
        elevationClass,
        className,
      )}
      {...restProps}
    >
      {children}
    </div>
  );
};

Paper.propTypes = {
  elevation: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Paper.displayName = 'Paper';

export default Paper;
