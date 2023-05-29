import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Text } from '../';

export const Textarea = ({
  label,
  name,
  value,
  placeholder,
  disabled = false,
  helperText,
  error,
  className,
  onChange = () => {},
  ...restProps
}) => {
  return (
    <div>
      {label && (
        <label className="ui-block ui-mb-2 ui-text-sm ui-font-medium ui-text-light1">
          {label}
        </label>
      )}
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        className={classNames(
          'ui-block ui-text-body ui-placeholder-light2 ui-p-2.5 ui-text-sm ui-w-full ui-mb-2 ui-border ui-rounded-md ui-focus:ring-info ui-focus:border-info',
          {
            'ui-border-danger': error,
            'ui-border-light2': !error,
          },
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

Textarea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  helperText: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
};

Textarea.displayName = 'Textarea';
