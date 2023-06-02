import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Text } from '../..';

const sizeMap = {
  sm: 'ui-p-2 ui-text-xs',
  md: 'ui-p-2.5 ui-text-sm',
  lg: 'ui-p-3 ui-text-base',
};

const FileUpload = ({
  label,
  name,
  size = 'md',
  value,
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
      <input
        type="file"
        className={classNames(
          'ui-cursor-pointer ui-block ui-text-body ui-placeholder-light2 ui-w-full ui-mb-2 ui-border ui-rounded-md ui-focus:ring-info ui-focus:border-info',
          {
            'ui-border-danger': error,
            'ui-border-light2': !error,
          },
          sizeClass,
          className,
        )}
        name={name}
        value={value}
        disabled={disabled}
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

FileUpload.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  helperText: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

FileUpload.displayName = 'FileUpload';

export default FileUpload;
