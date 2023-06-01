import React from 'react';
import { Grid, Paper } from '@lump/ui';

export default {
  title: 'Example/Grid',
  component: Grid,
};

export const Example1 = () => (
  <Grid container>
    <Grid col={3}>
      <Paper className="mb-2">Item col=3</Paper>
    </Grid>
    <Grid col={6}>
      <Paper className="mb-2">Item col=6</Paper>
    </Grid>
    <Grid col={3}>
      <Paper className="mb-2">Item col=3</Paper>
    </Grid>
  </Grid>
);

export const Example2 = () => (
  <Grid container>
    <Grid col={2}>
      <Paper className="mb-2">Item col=2</Paper>
    </Grid>
    <Grid col={4}>
      <Paper className="mb-2">Item col=4</Paper>
    </Grid>
    <Grid col={8}>
      <Paper className="mb-2">Item col=8</Paper>
    </Grid>
    <Grid col={2}>
      <Paper className="mb-2">Item col=2</Paper>
    </Grid>
  </Grid>
);

export const Example3 = () => (
  <Grid container>
    <Grid col={8}>
      <Paper className="mb-2">Item col=8</Paper>
    </Grid>
    <Grid col={4}>
      <Paper className="mb-2">Item col=4</Paper>
    </Grid>
    <Grid col={6}>
      <Paper className="mb-2">Item col=6</Paper>
    </Grid>
  </Grid>
);

export const Example4 = () => (
  <Grid container>
    <Grid col={2}>
      <Paper className="mb-2">Item col=2</Paper>
    </Grid>
    <Grid container col={3}>
      <Grid col={8}>
        <Paper className="mb-2">Item col=8</Paper>
      </Grid>
      <Grid col={4}>
        <Paper className="mb-2">Item col=4</Paper>
      </Grid>
    </Grid>
    <Grid col={3}>
      <Paper className="mb-2">Item col=3</Paper>
    </Grid>
    <Grid container equal col={4}>
      <Grid>
        <Paper className="mb-2">Item col=auto</Paper>
      </Grid>
      <Grid>
        <Paper className="mb-2">Item col=auto</Paper>
      </Grid>
    </Grid>
  </Grid>
);
