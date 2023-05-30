import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Stack, Text } from '../';

const Checkbox = ({
  label,
  name,
  value,
  disabled = false,
  error,
  className = '',
  onChange = () => {},
  ...restProps
}) => {
  return (
    <div>
      <Stack spacing={1}>
        <input
          checked={value}
          className={classNames(
            'ui-w-4 ui-h-4 ui-text-info ui-bg-light3 ui-border-light2 ui-rounded ui-focus:ring-info ui-focus:ring-2',
            className,
          )}
          disabled={disabled}
          name={name}
          type="checkbox"
          onChange={onChange}
          {...restProps}
        />
        {label && (
          <label className="ui-mb-2 ui-text-sm ui-font-medium ui-text-light1">
            {label}
          </label>
        )}
      </Stack>
      {error && (
        <Text className="ui-mb-1" color="danger" variant="body2">
          {error}
        </Text>
      )}
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
