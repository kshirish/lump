import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const colorMap = {
  dark: 'ui-text-body',
  light: 'ui-text-light1',
  white: 'ui-text-white',
  success: 'ui-text-success',
  danger: 'ui-text-danger',
  info: 'ui-text-info',
  warning: 'ui-text-warning',
};

const variantMap = {
  heading1: 'ui-text-4xl',
  heading2: 'ui-text-3xl',
  heading3: 'ui-text-2xl',
  heading4: 'ui-text-xl',
  heading5: 'ui-text-lg',
  base: 'ui-text-body',
  body1: 'ui-text-sm',
  body2: 'ui-text-xs ui-font-medium',
};

const Text = ({ variant = 'base', color = 'dark', children, className }) => {
  const variantClass = variantMap[variant];
  const colorClass = colorMap[color];

  return (
    <div className={classNames(variantClass, colorClass, className)}>
      {children}
    </div>
  );
};

Text.propTypes = {
  as: PropTypes.string,
  variant: PropTypes.oneOf([
    'heading1',
    'heading2',
    'heading3',
    'heading4',
    'heading5',
    'base',
    'body1',
    'body2',
  ]),
  color: PropTypes.oneOf([
    'dark',
    'light',
    'white',
    'success',
    'danger',
    'info',
    'warning',
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Text;
