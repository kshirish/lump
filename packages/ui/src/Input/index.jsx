import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Text } from '../';

const sizeMap = {
  sm: 'ui-p-2 ui-text-xs',
  md: 'ui-p-2.5 ui-text-sm',
  lg: 'ui-p-3 ui-text-base',
};

const Input = ({
  label,
  name,
  type = 'text',
  size = 'md',
  value,
  placeholder,
  helperText,
  error,
  className,
  onChange = () => {},
}) => {
  const sizeClass = sizeMap[size];

  return (
    <>
      {label && (
        <label className="ui-block ui-mb-2 ui-text-sm ui-font-medium ui-text-light">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        className={classNames(
          'ui-block ui-text-dark ui-placeholder-placeholder ui-w-full ui-mb-2 ui-border ui-rounded-md ui-focus:ring-info ui-focus:border-info',
          {
            'ui-border-danger': error,
            'ui-border-placeholder': !error,
          },
          sizeClass,
          className,
        )}
        onChange={(e) => onChange(e.target.value)}
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
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'number', 'tel', 'password']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;