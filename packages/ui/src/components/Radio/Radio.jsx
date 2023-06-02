import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Stack } from '../';
import { RadioContext } from '../RadioGroup/context';

const Radio = ({
  label,
  value,
  disabled = false,
  className = '',
  ...restProps
}) => {
  const context = useContext(RadioContext);

  if (!context) {
    return null;
  }

  return (
    <Stack spacing={1}>
      <input
        checked={context.value === value}
        className={classNames(
          'ui-w-4 ui-h-4 ui-border-light2 ui-rounded ui-focus:ring-info ui-focus:ring-2',
          className,
        )}
        disabled={disabled}
        name={context.name}
        type="radio"
        value={value}
        onChange={context.onChange}
        {...restProps}
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
  className: PropTypes.string,
};

Radio.displayName = 'Radio';

export default Radio;
