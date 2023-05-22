import { Button } from '@lump/ui';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = {
  args: {
    children: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    children: 'Secondary Button',
  },
};
