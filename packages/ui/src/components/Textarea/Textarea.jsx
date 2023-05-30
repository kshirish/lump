import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Text } from '../';

const Textarea = ({
  label,
  name,
  value,
  placeholder,
  disabled = false,
  helperText,
  error,
  className = '',
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
        className={classNames(
          'ui-block ui-text-body ui-placeholder-light2 ui-p-2.5 ui-text-sm ui-w-full ui-mb-2 ui-border ui-rounded-md ui-focus:ring-info ui-focus:border-info',
          {
            'ui-border-danger': error,
            'ui-border-light2': !error,
          },
          className,
        )}
        disabled={disabled}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...restProps}
      />
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

Textarea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  helperText: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

Textarea.displayName = 'Textarea';

export default Textarea;
