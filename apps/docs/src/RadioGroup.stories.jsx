import { useState } from 'react';
import { Stack, Radio, RadioGroup } from '@lump/ui';

export default {
  title: 'Example/RadioGroup',
  component: RadioGroup,
};

export const Horizontal = () => (
  <RadioGroup name="favorite" inline>
    <Radio value="Yellow" label="Yellow" />
    <Radio value="Blue" label="Blue" />
    <Radio value="Maroon" label="Maroon" />
  </RadioGroup>
);

export const Vertical = () => (
  <RadioGroup name="favorite">
    <Radio value="Yellow" label="Yellow" />
    <Radio value="Blue" label="Blue" />
    <Radio value="Maroon" label="Maroon" />
  </RadioGroup>
);

export const Disabled = () => (
  <RadioGroup name="favorite">
    <Radio value="Yellow" label="Yellow" />
    <Radio value="Blue" label="Blue" disabled />
    <Radio value="Maroon" label="Maroon" />
  </RadioGroup>
);

export const Controlled = () => {
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
      name="favorite"
      value={favorite}
      error={error}
      onChange={handleChange}
    >
      <Radio value="Yellow" label="Yellow" />
      <Radio value="Blue" label="Blue" />
      <Radio value="Maroon" label="Maroon" />
    </RadioGroup>
  );
};
