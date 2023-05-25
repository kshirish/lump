import { Stack, Paper } from '@lump/ui';

export default {
  title: 'Example/Stack',
  component: Stack,
};

const Item1 = () => (
  <Paper className="border border-info">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptatum
    reiciendis quas accusantium nisi blanditiis, consectetur ab, modi magnam
    porro veniam dolor architecto veritatis consequuntur sit, dicta numquam.
    Consequatur, ipsa!
  </Paper>
);
const Item2 = () => (
  <Paper className="border border-warning">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptatum
    reiciendis quas accusantium nisi blanditiis, consectetur ab, modi magnam
    porro veniam dolor architecto veritatis consequuntur sit, dicta numquam.
    Consequatur, ipsa!
  </Paper>
);
const Item3 = () => (
  <Paper className="border border-success">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptatum
    reiciendis quas accusantium nisi blanditiis, consectetur ab, modi magnam
    porro veniam dolor architecto veritatis consequuntur sit, dicta numquam.
    Consequatur, ipsa!
  </Paper>
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
