import React from 'react';
import {
  Table,
  TableRow,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableBodyCell,
  TableFooter,
  Button,
} from '@lump/ui';

export default {
  title: 'Example/Table',
  component: Table,
};

export const Basic = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderCell>Company</TableHeaderCell>
        <TableHeaderCell>Contact</TableHeaderCell>
        <TableHeaderCell>Country</TableHeaderCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableBodyCell>Alfreds Futterkiste</TableBodyCell>
        <TableBodyCell>Maria Anders</TableBodyCell>
        <TableBodyCell>Germany</TableBodyCell>
      </TableRow>
      <TableRow>
        <TableBodyCell>Centro comercial Moctezuma</TableBodyCell>
        <TableBodyCell>Francisco Chang</TableBodyCell>
        <TableBodyCell>Mexico</TableBodyCell>
      </TableRow>
      <TableRow>
        <TableBodyCell>Ernst Handel</TableBodyCell>
        <TableBodyCell>Roland Mendel</TableBodyCell>
        <TableBodyCell>Austria</TableBodyCell>
      </TableRow>
      <TableRow>
        <TableBodyCell>Island Trading</TableBodyCell>
        <TableBodyCell>Helen Bennett</TableBodyCell>
        <TableBodyCell>UK</TableBodyCell>
      </TableRow>
      <TableRow>
        <TableBodyCell>Laughing Bacchus Winecellars</TableBodyCell>
        <TableBodyCell>Yoshi Tannamuri</TableBodyCell>
        <TableBodyCell>Canada</TableBodyCell>
      </TableRow>
      <TableRow>
        <TableBodyCell>Magazzini Alimentari Riuniti</TableBodyCell>
        <TableBodyCell>Giovanni Rovelli</TableBodyCell>
        <TableBodyCell>Italy</TableBodyCell>
      </TableRow>
    </TableBody>
  </Table>
);
