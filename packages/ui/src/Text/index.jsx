import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const variantMap = {
  heading1: 'text-4xl',
  heading2: 'text-3xl',
  heading3: 'text-2xl',
  heading4: 'text-xl',
  heading5: 'text-lg',
  base: 'text-base',
  body1: 'text-sm',
  body2: 'text-xs font-medium',
};

const Text = (props) => {
  const variantClass = variantMap[props.variant || 'base'];
  const colorClass = `text-${props.color || 'dark'}`;

  return (
    <div className={classNames(variantClass, colorClass)}>{props.children}</div>
  );
};

Text.propTypes = {
  as: PropTypes.string,
  variant: PropTypes.oneOf([
    'heading1',
    'heading2',
    'heading3',
    'heading4',
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
