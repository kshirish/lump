import { Stack, Button } from '@lump/ui';

export default {
  title: 'Example/Button',
  component: Button,
};

export const Variants = () => (
  <Stack direction="col" spacing={2}>
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
  <Stack direction="col" spacing={2}>
    <Button size="sm">Read More</Button>
    <Button>Read More</Button>
    <Button size="lg">Read More</Button>

    <Button variant="outlined" size="sm">
      Read More
    </Button>
    <Button variant="outlined">Read More</Button>
    <Button variant="outlined" size="lg">
      Read More
    </Button>

    <Button variant="text" size="sm">
      Read More
    </Button>
    <Button variant="text">Read More</Button>
    <Button variant="text" size="lg">
      Read More
    </Button>
  </Stack>
);
