import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const variantMap = {
  filled: {
    primary: 'ui-text-white ui-bg-primary',
    secondary: 'ui-text-white ui-bg-secondary',
  },
  outlined: {
    primary: 'ui-border ui-border-primary ui-text-primary',
    secondary: 'ui-border ui-border-secondary ui-text-secondary',
  },
  text: { primary: 'ui-text-primary', secondary: 'ui-text-secondary' },
};

const sizeMap = {
  sm: 'ui-px-2 ui-py-0.5 ui-text-xs',
  md: 'ui-px-3 ui-py-1 ui-text-sm',
  lg: 'ui-px-4 ui-py-2 ui-text-base',
};

const Button = (props) => {
  const variantClass =
    variantMap[props.variant || 'filled'][props.color || 'primary'];
  const sizeClass = sizeMap[props.size || 'md'];

  return (
    <button
      type="button"
      className={classNames(
        'ui-rounded',
        variantClass,
        sizeClass,
        {
          'ui-pointer-events-none': props.disabled,
        },
        props.className,
      )}
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
