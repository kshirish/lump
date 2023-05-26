import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Stack, RadioContext } from '../';

export const Radio = ({ label, value, disabled = false, className }) => {
  const context = useContext(RadioContext);

  if (!context) {
    return null;
  }

  return (
    <Stack spacing={1}>
      <input
        type="radio"
        name={context.name}
        value={value}
        checked={context.value === value}
        disabled={disabled}
        className={classNames(
          'ui-w-4 ui-h-4 ui-text-info ui-bg-light3 ui-border-light2 ui-rounded ui-focus:ring-info ui-focus:ring-2',
          className,
        )}
        onChange={context.onChange}
      />
      {label && (
        <label className="ui-mb-2 ui-text-sm ui-font-medium ui-text-light1">
          {label}
        </label>
      )}
    </Stack>
  );
};

Radio.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  disabled: PropTypes.bool,
};
