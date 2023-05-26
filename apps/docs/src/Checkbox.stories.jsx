import { useState } from 'react';
import { Checkbox } from '@lump/ui';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
};

export const Basic = () => <Checkbox name="offer" label="Free Shopping" />;

export const Disabled = () => (
  <Checkbox name="offer" label="Free Shopping" disabled />
);

export const Error = () => (
  <Checkbox
    name="offer"
    label="Free Shopping"
    error="Only logged-in users can avail"
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
      name="agreed"
      label="I agree with above Terms and Conditions"
      value={agreed}
      error={error}
      onChange={handleChange}
    />
  );
};
