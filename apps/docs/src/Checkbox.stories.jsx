import React, { useState } from 'react';
import { Checkbox } from '@lump/ui';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
};

export const Basic = () => <Checkbox label="Free Shopping" name="offer" />;

export const Disabled = () => (
  <Checkbox label="Free Shopping" name="offer" disabled />
);

export const Error = () => (
  <Checkbox
    error="Only logged-in users can avail"
    label="Free Shopping"
    name="offer"
  />
);

export const Controlled = () => {
  const [agreed, setAgreed] = useState(true);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.checked;

    if (value) {
      setError('');
    } else {
      setError('You are not allowed in!');
    }

    setAgreed(value);
  };

  return (
    <Checkbox
      error={error}
      label="I agree with above Terms and Conditions"
      name="agreed"
      value={agreed}
      onChange={handleChange}
    />
  );
};
