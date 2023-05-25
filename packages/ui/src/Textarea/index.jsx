import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Text } from '../';

const Textarea = ({
  label,
  name,
  value,
  placeholder,
  helperText,
  error,
  className,
  onChange = () => {},
}) => {
  return (
    <>
      {label && (
        <label className="ui-block ui-mb-2 ui-text-sm ui-font-medium ui-text-light">
          {label}
        </label>
      )}
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        className={classNames(
          'ui-block ui-text-dark ui-placeholder-placeholder ui-p-2.5 ui-text-sm ui-w-full ui-mb-2 ui-border ui-rounded-md ui-focus:ring-info ui-focus:border-info',
          {
            'ui-border-danger': error,
            'ui-border-placeholder': !error,
          },
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

Textarea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
};

export default Textarea;
