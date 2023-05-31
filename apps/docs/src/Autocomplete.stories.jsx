import React from 'react';
import { Autocomplete, Input } from '@lump/ui';

export default {
  title: 'Example/Autocomplete',
  component: Autocomplete,
};

// option {text, value, disabled}

const top100Films = [];

export const Basic = () => (
  <Autocomplete
    options={top100Films}
    renderInput={(params) => <Input {...params} label="Film" />}
  />
);

export const Multiple = () => (
  <Autocomplete
    multiple
    options={top100Films}
    renderInput={(params) => <Input {...params} label="Film" />}
  />
);
