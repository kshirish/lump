import React from 'react';
import { Grid, Paper } from '@lump/ui';

export default {
  title: 'Example/Grid',
  component: Grid,
};

const Item = ({ children }) => <Paper>{children}</Paper>;

export const Example1 = () => (
  <Grid container spacing={2}>
    <Grid col={2}>
      <Item>Item</Item>
    </Grid>
    <Grid col={4}>
      <Item>Item</Item>
    </Grid>
    <Grid col={4}>
      <Item>Item</Item>
    </Grid>
    <Grid col={2}>
      <Item>Item</Item>
    </Grid>
  </Grid>
);

export const Example2 = () => (
  <Grid container equal spacing={2}>
    <Grid>
      <Item>Item</Item>
    </Grid>
    <Grid>
      <Item>Item</Item>
    </Grid>
    <Grid>
      <Item>Item</Item>
    </Grid>
    <Grid>
      <Item>Item</Item>
    </Grid>
  </Grid>
);

export const Example3 = () => (
  <Grid container spacing={3}>
    <Grid>
      <Item>Item</Item>
    </Grid>
    <Grid col={6}>
      <Item>Item</Item>
    </Grid>
    <Grid>
      <Item>Item</Item>
    </Grid>
  </Grid>
);

export const Example4 = () => (
  <Grid container spacing={3}>
    <Grid col="auto">
      <Item>Item</Item>
    </Grid>
    <Grid col={6}>
      <Item>Item</Item>
    </Grid>
    <Grid>
      <Item>Item</Item>
    </Grid>
  </Grid>
);

export const Example5 = () => (
  <Grid container spacing={2}>
    <Grid col={8}>
      <Item>Item</Item>
    </Grid>
    <Grid container col={3}>
      <Grid col={8}>
        <Item>Item</Item>
      </Grid>
      <Grid col={4}>
        <Item>Item</Item>
      </Grid>
    </Grid>
    <Grid col={3}>
      <Item>Item</Item>
    </Grid>
    <Grid container equal col={4}>
      <Grid>
        <Item>Item</Item>
      </Grid>
      <Grid>
        <Item>Item</Item>
      </Grid>
    </Grid>
  </Grid>
);
