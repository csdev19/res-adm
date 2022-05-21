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

function createData(
  name: string,
  description: string,
  price: number,
  quantity: number,
  isVisible: boolean,
  category: string,
) {
  return { name, description, price, quantity, isVisible, category };
}

const rows = [
  createData('Pago 1', 'desciption', 159, 10, true, 'variable_expends'),
  createData('Pago tarjeta 2', 'desciption', 159, 10, true, 'variable_expends'),
  createData(
    'Ingreso sueldo globaltask',
    'desciption',
    159,
    10,
    true,
    'income',
  ),
  createData('Invertsion crypto', 'desciption', 159, 10, true, 'investment'),
  createData('Pago tarjeta 3', 'desciption', 159, 10, true, 'variable_expends'),
];

const ProductTable: VoidFunctionComponent = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Category</TableCell>
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
                <TableCell component="th" scope="row">
                  {row.description}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.price}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.quantity}
                </TableCell>
                <TableCell>{row.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProductTable;
