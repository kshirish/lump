import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const colorMap = {
  dark: 'ui-text-dark',
  light: 'ui-text-light',
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
  base: 'ui-text-base',
  body1: 'ui-text-sm',
  body2: 'ui-text-xs font-medium',
};

const Text = (props) => {
  const variantClass = variantMap[props.variant || 'base'];
  const colorClass = colorMap[props.color || 'dark'];

  return (
    <div className={classNames(variantClass, colorClass, props.className)}>
      {props.children}
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
