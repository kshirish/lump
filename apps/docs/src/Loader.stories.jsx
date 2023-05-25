import { Stack, Loader } from '@lump/ui';

export default {
  title: 'Example/Loader',
  component: Loader,
};

export const Sizes = () => (
  <Stack alignItems="center" spacing={2}>
    <Loader size="sm" />
    <Loader />
    <Loader size="lg" />
  </Stack>
);
