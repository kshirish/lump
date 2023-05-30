import React from 'react';
import { Button, ButtonGroup } from '@lump/ui';

export default {
  title: 'Example/ButtonGroup',
  component: ButtonGroup,
};

export const Example1 = () => (
  <ButtonGroup>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
  </ButtonGroup>
);

export const Example2 = () => (
  <ButtonGroup>
    <Button color="secondary" variant="outlined">
      Button
    </Button>
    <Button color="secondary" variant="outlined">
      Button
    </Button>
    <Button color="secondary" variant="outlined">
      Button
    </Button>
  </ButtonGroup>
);

export const Example3 = () => (
  <ButtonGroup>
    <Button color="secondary">Button</Button>
    <Button color="secondary" variant="outlined">
      Button
    </Button>
    <Button color="secondary">Button</Button>
  </ButtonGroup>
);
