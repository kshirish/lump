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
  className,
  onChange = () => {},
}) => {
  return (
    <div>
      <Stack spacing={1}>
        <input
          type="checkbox"
          name={name}
          checked={value}
          disabled={disabled}
          className={classNames(
            'ui-w-4 ui-h-4 ui-text-info ui-bg-light3 ui-border-light2 ui-rounded ui-focus:ring-info ui-focus:ring-2',
            className,
          )}
          onChange={onChange}
        />
        {label && (
          <label className="ui-mb-2 ui-text-sm ui-font-medium ui-text-light1">
            {label}
          </label>
        )}
      </Stack>
      {error && (
        <Text variant="body2" color="danger" className="ui-mb-1">
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
  onChange: PropTypes.func,
};

export default Checkbox;
