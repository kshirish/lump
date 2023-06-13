import React, { useState } from 'react';
import { Radio, RadioGroup } from '@lump/ui';

export default {
  title: 'Example/RadioGroup',
  component: RadioGroup,
};

export const Horizontal = () => {
  const [value, setValue] = useState('Blue');

  return (
    <RadioGroup
      name="favorite"
      inline
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      <Radio label="Yellow" value="Yellow" />
      <Radio label="Blue" value="Blue" />
      <Radio label="Maroon" value="Maroon" />
    </RadioGroup>
  );
};

export const Vertical = () => {
  const [value, setValue] = useState('Blue');

  return (
    <RadioGroup
      name="favorite"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      <Radio label="Yellow" value="Yellow" />
      <Radio label="Blue" value="Blue" />
      <Radio label="Maroon" value="Maroon" />
    </RadioGroup>
  );
};

export const Disabled = () => (
  <RadioGroup name="favorite">
    <Radio label="Yellow" value="Yellow" />
    <Radio label="Blue" value="Blue" disabled />
    <Radio label="Maroon" value="Maroon" />
  </RadioGroup>
);

export const Error = () => {
  const [favorite, setFavorite] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;

    if (value === 'Yellow') {
      setError('');
    } else {
      setError('Poor choice!');
    }

    setFavorite(value);
  };

  return (
    <RadioGroup
      error={error}
      name="favorite"
      value={favorite}
      onChange={handleChange}
    >
      <Radio label="Yellow" value="Yellow" />
      <Radio label="Blue" value="Blue" />
      <Radio label="Maroon" value="Maroon" />
    </RadioGroup>
  );
};
