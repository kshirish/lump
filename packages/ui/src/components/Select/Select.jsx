import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Text } from '../..';

const sizeMap = {
  sm: 'ui-p-2 ui-text-xs',
  md: 'ui-p-2.5 ui-text-sm',
  lg: 'ui-p-3 ui-text-base',
};

const Select = ({
  label,
  name,
  size = 'md',
  placeholder,
  value,
  options,
  disabled = false,
  helperText,
  error,
  className = '',
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
      <select
        className={classNames(
          'ui-block ui-text-body ui-placeholder-light2 ui-w-full ui-mb-2 ui-border ui-rounded-md ui-focus:ring-info ui-focus:border-info',
          {
            'ui-border-danger': error,
            'ui-border-light2': !error,
          },
          sizeClass,
          className,
        )}
        name={name}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        {...restProps}
      >
        {placeholder && <option selected>{placeholder}</option>}
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            selected={option.value === value}
          >
            {option.text}
          </option>
        ))}
      </select>
      {helperText && (
        <Text className="ui-mb-1" color="light" variant="body2">
          {helperText}
        </Text>
      )}
      {error && (
        <Text className="ui-mb-1" color="danger" variant="body2">
          {error}
        </Text>
      )}
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  placeholder: PropTypes.string,
  value: PropTypes.any,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.any,
    }),
  ),
  disabled: PropTypes.bool,
  helperText: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

Select.displayName = 'Select';

export default Select;
