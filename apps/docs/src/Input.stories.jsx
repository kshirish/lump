import { useState } from 'react';
import { Input } from '@lump/ui';

export default {
  title: 'Example/Input',
  component: Input,
};

export const Basic = () => (
  <Input label="First Name" placeholder="Enter your first name" />
);

export const Sizes = () => (
  <>
    <Input size="sm" label="First Name" placeholder="Enter your first name" />
    <Input label="First Name" placeholder="Enter your first name" />
    <Input size="lg" label="First Name" placeholder="Enter your first name" />
  </>
);

export const Error = () => (
  <Input
    label="First Name"
    placeholder="Enter your first name"
    error="First name should have more than 3 letters"
  />
);

export const Helper = () => (
  <Input
    label="First Name"
    placeholder="Enter your first name"
    helperText="You can skip it"
  />
);

export const Controlled = () => {
  const [age, setAge] = useState(18);
  const [error, setError] = useState('');

  const handleChange = (value) => {
    if (value < 18) {
      setError('You are not allowed in!');
    }

    setAge(value);
  };

  return (
    <Input
      type="number"
      label="Age"
      helperText="Try entering less than 18"
      value={age}
      error={error}
      onChange={handleChange}
    />
  );
};
