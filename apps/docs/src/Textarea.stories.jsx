import { useState } from 'react';
import { Textarea } from '@lump/ui';

export default {
  title: 'Example/Textarea',
  component: Textarea,
};

export const Basic = () => (
  <Textarea
    name="firstName"
    label="First Name"
    placeholder="Enter your first name"
  />
);

export const Disabled = () => (
  <Textarea
    name="firstName"
    label="First Name"
    placeholder="Enter your first name"
    disabled
  />
);

export const Error = () => (
  <Textarea
    name="firstName"
    label="First Name"
    placeholder="Enter your first name"
    error="First name should have more than 3 letters"
  />
);

export const Helper = () => (
  <Textarea
    name="firstName"
    label="First Name"
    placeholder="Enter your first name"
    helperText="You can skip it"
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
      name="name"
      label="Name"
      helperText="Try typing lesser than 5 characters"
      value={name}
      error={error}
      onChange={handleChange}
    />
  );
};
