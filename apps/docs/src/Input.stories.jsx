import { useState } from 'react';
import { Input } from '@lump/ui';

export default {
  title: 'Example/Input',
  component: Input,
};

export const Basic = () => (
  <Input
    name="firstName"
    label="First Name"
    placeholder="Enter your first name"
  />
);

export const Disabled = () => (
  <Input
    name="firstName"
    label="First Name"
    placeholder="Enter your first name"
    disabled
  />
);

export const Sizes = () => (
  <>
    <Input
      name="firstName"
      size="sm"
      label="First Name"
      placeholder="Enter your first name"
    />
    <Input
      name="firstName"
      label="First Name"
      placeholder="Enter your first name"
    />
    <Input
      name="firstName"
      size="lg"
      label="First Name"
      placeholder="Enter your first name"
    />
  </>
);

export const Error = () => (
  <Input
    name="firstName"
    label="First Name"
    placeholder="Enter your first name"
    error="First name should have more than 3 letters"
  />
);

export const Helper = () => (
  <Input
    name="firstName"
    label="First Name"
    placeholder="Enter your first name"
    helperText="You can skip it"
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
      type="number"
      name="age"
      label="Age"
      helperText="Try entering less than 18"
      value={age}
      error={error}
      onChange={handleChange}
    />
  );
};
