import React from 'react';
import { Stack, Button } from '@lump/ui';

export default {
  title: 'Example/Button',
  component: Button,
};

export const Variants = () => (
  <Stack spacing={2}>
    <Button>Primary Button</Button>
    <Button variant="outlined">Primary Button</Button>
    <Button variant="text">Primary Button</Button>

    <Button color="secondary">Secondary Button</Button>
    <Button color="secondary" variant="outlined">
      Secondary Button
    </Button>
    <Button color="secondary" variant="text">
      Secondary Button
    </Button>
  </Stack>
);

export const Sizes = () => (
  <Stack spacing={2}>
    <Button size="sm">Read More</Button>
    <Button>Read More</Button>
    <Button size="lg">Read More</Button>

    <Button color="secondary" size="sm" variant="outlined">
      Read More
    </Button>
    <Button color="secondary" variant="outlined">
      Read More
    </Button>
    <Button color="secondary" size="lg" variant="outlined">
      Read More
    </Button>

    <Button color="secondary" size="sm" variant="text">
      Read More
    </Button>
    <Button color="secondary" variant="text">
      Read More
    </Button>
    <Button color="secondary" size="lg" variant="text">
      Read More
    </Button>
  </Stack>
);
