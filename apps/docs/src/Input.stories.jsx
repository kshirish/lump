import React, { useState } from 'react';
import { Input } from '@lump/ui';

export default {
  title: 'Example/Input',
  component: Input,
};

export const Basic = () => (
  <Input
    label="First Name"
    name="firstName"
    placeholder="Enter your first name"
  />
);

export const Disabled = () => (
  <Input
    label="First Name"
    name="firstName"
    placeholder="Enter your first name"
    disabled
  />
);

export const Sizes = () => (
  <>
    <Input
      label="First Name"
      name="firstName"
      placeholder="Enter your first name"
      size="sm"
    />
    <Input
      label="First Name"
      name="firstName"
      placeholder="Enter your first name"
    />
    <Input
      label="First Name"
      name="firstName"
      placeholder="Enter your first name"
      size="lg"
    />
  </>
);

export const Error = () => (
  <Input
    error="First name should have more than 3 letters"
    label="First Name"
    name="firstName"
    placeholder="Enter your first name"
  />
);

export const Helper = () => (
  <Input
    helperText="You can skip it"
    label="First Name"
    name="firstName"
    placeholder="Enter your first name"
  />
);

export const Controlled = () => {
  const [age, setAge] = useState(18);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;

    if (value < 18) {
      setError('You are not allowed in!');
    } else {
      setError('');
    }

    setAge(value);
  };

  return (
    <Input
      error={error}
      helperText="Try entering less than 18"
      label="Age"
      name="age"
      type="number"
      value={age}
      onChange={handleChange}
    />
  );
};
