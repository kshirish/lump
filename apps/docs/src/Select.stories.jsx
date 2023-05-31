import React, { useState } from 'react';
import { Select } from '@lump/ui';

export default {
  title: 'Example/Select',
  component: Select,
};

export const Basic = () => (
  <Select
    label="Type of dish"
    name="dishType"
    placeholder="Select a type of dish"
    options={[
      { text: 'Meat', value: 'x' },
      { text: 'Vegetarian', value: 'y' },
      { text: 'Sauce', value: 'z' },
    ]}
  />
);

export const Disabled = () => (
  <Select
    label="Type of dish"
    name="dishType"
    placeholder="Select a type of dish"
    options={[
      { text: 'Meat', value: 'x' },
      { text: 'Vegetarian', value: 'y' },
      { text: 'Sauce', value: 'z' },
    ]}
    disabled
  />
);

export const Sizes = () => (
  <>
    <Select
      label="Type of dish"
      name="dishType"
      placeholder="Select a type of dish"
      options={[
        { text: 'Meat', value: 'x' },
        { text: 'Vegetarian', value: 'y' },
        { text: 'Sauce', value: 'z' },
      ]}
      size="sm"
    />
    <Select
      label="Type of dish"
      name="dishType"
      placeholder="Select a type of dish"
      options={[
        { text: 'Meat', value: 'x' },
        { text: 'Vegetarian', value: 'y' },
        { text: 'Sauce', value: 'z' },
      ]}
    />
    <Select
      label="Type of dish"
      name="dishType"
      placeholder="Select a type of dish"
      options={[
        { text: 'Meat', value: 'x' },
        { text: 'Vegetarian', value: 'y' },
        { text: 'Sauce', value: 'z' },
      ]}
      size="lg"
    />
  </>
);

export const Error = () => (
  <Select
    error="First name should have more than 3 letters"
    label="Type of dish"
    name="dishType"
    placeholder="Select a type of dish"
    options={[
      { text: 'Meat', value: 'x' },
      { text: 'Vegetarian', value: 'y' },
      { text: 'Sauce', value: 'z' },
    ]}
  />
);

export const Helper = () => (
  <Select
    helperText="You can skip it"
    label="Type of dish"
    name="dishType"
    placeholder="Select a type of dish"
    options={[
      { text: 'Meat', value: 'x' },
      { text: 'Vegetarian', value: 'y' },
      { text: 'Sauce', value: 'z' },
    ]}
  />
);

export const Controlled = () => {
  const [type, setType] = useState();
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;

    if (value === 'z') {
      setError('what!?');
    } else {
      setError('');
    }

    setType(value);
  };

  return (
    <Select
      error={error}
      helperText="Let us know about your food preference."
      label="Type of dish"
      name="type"
      value={type}
      placeholder="Select a type of dish"
      options={[
        { text: 'Meat', value: 'x' },
        { text: 'Vegetarian', value: 'y' },
        { text: 'Sauce', value: 'z' },
      ]}
      onChange={handleChange}
    />
  );
};
