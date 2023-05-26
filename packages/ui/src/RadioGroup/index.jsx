import React, { createContext } from 'react';
import PropTypes from 'prop-types';

import { Stack, Text } from '../';

export const RadioContext = createContext();

const RadioGroup = ({
  label,
  name,
  value,
  inline = false,
  error,
  children,
  className,
  onChange = () => {},
}) => {
  return (
    <div className={className}>
      {label && (
        <label className="ui-mb-2 ui-text-sm ui-font-medium ui-text-light1">
          {label}
        </label>
      )}
      <RadioContext.Provider value={{ name, value, onChange }}>
        <Stack direction={inline ? 'row' : 'col'} spacing={1}>
          {children}
        </Stack>
      </RadioContext.Provider>
      {error && (
        <Text variant="body2" color="danger" className="ui-mb-1">
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onChange: PropTypes.func,
};

export default RadioGroup;
