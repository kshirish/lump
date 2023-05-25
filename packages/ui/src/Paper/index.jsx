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

const Paper = (props) => {
  const elevationClass =
    elevationMap[props.elevation ? props.elevation - 1 : 0];

  return (
    <div
      className={classNames(
        'ui-p-4 ui-bg-white ui-rounded-md',
        elevationClass,
        props.className,
      )}
    >
      {props.children}
    </div>
  );
};

Paper.propTypes = {
  elevation: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Paper;
