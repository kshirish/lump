import { Stack, Paper } from '@lump/ui';

export default {
  title: 'Example/Paper',
  component: Paper,
};

export const Variants = () => (
  <Stack spacing={2}>
    <Paper className="w-64 h-24" elevation={1}>
      Item 1
    </Paper>
    <Paper className="w-64 h-24" elevation={2}>
      Item 2
    </Paper>
    <Paper className="w-64 h-24" elevation={3}>
      Item 3
    </Paper>
    <Paper className="w-64 h-24" elevation={4}>
      Item 4
    </Paper>
    <Paper className="w-64 h-24" elevation={5}>
      Item 5
    </Paper>
  </Stack>
);
