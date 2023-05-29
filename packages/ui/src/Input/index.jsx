import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Text } from '../';

const sizeMap = {
  sm: 'ui-p-2 ui-text-xs',
  md: 'ui-p-2.5 ui-text-sm',
  lg: 'ui-p-3 ui-text-base',
};

export const Input = ({
  label,
  name,
  type = 'text',
  size = 'md',
  placeholder,
  value,
  disabled = false,
  helperText,
  error,
  className,
  onChange = () => {},
  ...restProps
}) => {
  const sizeClass = sizeMap[size];

  return (
    <div>
      {label && (
        <label className="ui-block ui-mb-2 ui-text-sm ui-font-medium ui-text-light1">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        className={classNames(
          'ui-block ui-text-body ui-placeholder-light2 ui-w-full ui-mb-2 ui-border ui-rounded-md ui-focus:ring-info ui-focus:border-info',
          {
            'ui-border-danger': error,
            'ui-border-light2': !error,
          },
          sizeClass,
          className,
        )}
        onChange={onChange}
        {...restProps}
      />
      {helperText && (
        <Text variant="body2" color="light" className="ui-mb-1">
          {helperText}
        </Text>
      )}
      {error && (
        <Text variant="body2" color="danger" className="ui-mb-1">
          {error}
        </Text>
      )}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'number', 'tel', 'password']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  helperText: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
};

Input.displayName = 'Input';
