import React, { useState } from 'react';
import { Textarea } from '@lump/ui';

export default {
  title: 'Example/Textarea',
  component: Textarea,
};

export const Basic = () => (
  <Textarea
    label="First Name"
    name="firstName"
    placeholder="Enter your first name"
  />
);

export const Disabled = () => (
  <Textarea
    label="First Name"
    name="firstName"
    placeholder="Enter your first name"
    disabled
  />
);

export const Error = () => (
  <Textarea
    error="First name should have more than 3 letters"
    label="First Name"
    name="firstName"
    placeholder="Enter your first name"
  />
);

export const Helper = () => (
  <Textarea
    helperText="You can skip it"
    label="First Name"
    name="firstName"
    placeholder="Enter your first name"
  />
);

export const Controlled = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;

    if (value.length < 3) {
      setError("Name can't be lesser than 5 characters");
    } else {
      setError('');
    }

    setName(value);
  };

  return (
    <Textarea
      error={error}
      helperText="Try typing lesser than 5 characters"
      label="Name"
      name="name"
      value={name}
      onChange={handleChange}
    />
  );
};
