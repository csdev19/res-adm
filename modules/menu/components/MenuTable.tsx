import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import React, { VoidFunctionComponent } from 'react';

function createData(name: string, amount: number, category: string) {
  return { name, amount, category };
}

const rows = [
  createData('Pago 1', 159, 'variable_expends'),
  createData('Pago tarjeta 2', 237, 'variable_expends'),
  createData('Ingreso sueldo globaltask', 262, 'income'),
  createData('Invertsion crypto', 305, 'investment'),
  createData('Pago tarjeta 3', 356, 'variable_expends'),
];

const MenuTable: VoidFunctionComponent = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell>Category</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MenuTable;
