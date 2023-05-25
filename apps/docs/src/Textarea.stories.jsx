import { useState } from 'react';
import { Textarea } from '@lump/ui';

export default {
  title: 'Example/Textarea',
  component: Textarea,
};

export const Basic = () => (
  <Textarea label="First Name" placeholder="Enter your first name" />
);

export const Error = () => (
  <Textarea
    label="First Name"
    placeholder="Enter your first name"
    error="First name should have more than 3 letters"
  />
);

export const Helper = () => (
  <Textarea
    label="First Name"
    placeholder="Enter your first name"
    helperText="You can skip it"
  />
);

export const Controlled = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleChange = (value) => {
    if (value.length < 3) {
      setError("Name can't be lesser than 5 characters");
    }

    setName(value);
  };

  return (
    <Textarea
      label="Name"
      helperText="Try typing lesser than 5 characters"
      value={name}
      error={error}
      onChange={handleChange}
    />
  );
};
