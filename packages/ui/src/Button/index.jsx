import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const variantMap = {
  filled: {
    primary: 'text-white bg-primary',
    secondary: 'text-white bg-secondary',
  },
  outlined: {
    primary: 'border border-primary text-primary',
    secondary: 'border border-secondary text-secondary',
  },
  text: { primary: 'text-primary', secondary: 'text-secondary' },
};

const sizeMap = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 test-sm',
  lg: 'px-4 py-2 text-base',
};

const Button = (props) => {
  const variantClass =
    variantMap[props.variant || 'filled'][props.color || 'primary'];
  const sizeClass = sizeMap[props.size || 'md'];

  return (
    <button
      type="button"
      className={classNames('rounded', variantClass, sizeClass, {
        'pointer-events-none': props.disabled,
      })}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  as: PropTypes.string,
  variant: PropTypes.oneOf(['filled', 'outlined', 'text']),
  color: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Button;
