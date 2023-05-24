import { Stack } from '@lump/ui/src';

export default {
  title: 'Example/Stack',
  component: Stack,
};

const Item1 = () => (
  <div className="w-72 border border-black p-6 bg-blue-500">Item 1</div>
);
const Item2 = () => (
  <div className="w-64 border border-black p-6 bg-yellow-500">Item 2</div>
);
const Item3 = () => (
  <div className="w-96 border border-black p-6 bg-green-500">Item 3</div>
);

export const Example1 = () => (
  <Stack spacing={2}>
    <Item1 />
    <Item2 />
    <Item3 />
  </Stack>
);

export const Example2 = () => (
  <Stack direction="col" spacing={2}>
    <Item1 />
    <Item2 />
    <Item3 />
  </Stack>
);

export const Example3 = () => (
  <Stack direction="col" alignItems="center" spacing={2}>
    <Item1 />
    <Item2 />
    <Item3 />
  </Stack>
);
