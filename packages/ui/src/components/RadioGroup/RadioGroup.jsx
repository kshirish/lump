import React from 'react';
import PropTypes from 'prop-types';

import { Stack, Text } from '../';
import { RadioContext } from './context';

const RadioGroup = ({
  label,
  name,
  value,
  inline = false,
  error,
  children,
  className = '',
  onChange = () => {},
  ...restProps
}) => {
  return (
    <div className={className} {...restProps}>
      {label && (
        <label className="ui-block ui-mb-2 ui-text-sm ui-font-medium ui-text-light1">
          {label}
        </label>
      )}
      <RadioContext.Provider value={{ name, value, onChange }}>
        <Stack direction={inline ? 'row' : 'col'} spacing={1}>
          {children}
        </Stack>
      </RadioContext.Provider>
      {error && (
        <Text className="ui-mb-1" color="danger" variant="body2">
          {error}
        </Text>
      )}
    </div>
  );
};

RadioGroup.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  inline: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onChange: PropTypes.func,
};

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
