import {
  Box,
  Button,
  Container,
  CssBaseline,
  DialogContent,
  Divider,
  TextField,
} from '@mui/material';
import React, { useState, VoidFunctionComponent } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DashboardSkeleton from 'modules/shared/components/DashboardSkeleton';
import Modal from 'components/Modal';
import ProductTable from 'modules/products/components/ProductTable';

const MenuPage: VoidFunctionComponent = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CssBaseline />
      <DashboardSkeleton>
        <div>
          <Container maxWidth="lg">
            <Box
              aria-label="toolbar"
              sx={{ display: 'flex', marginTop: '20px', marginBottom: '20px' }}
            >
              <Box sx={{ flex: '1 1 auto' }}></Box>
              <Button
                variant="contained"
                endIcon={<AddCircleIcon />}
                onClick={() => setOpen(true)}
              >
                Crea nuevo registro
              </Button>
            </Box>
            <ProductTable></ProductTable>
          </Container>

          <Modal
            onClose={() => setOpen(false)}
            open={open}
            title={'Crea un nuevo producto'}
          >
            <DialogContent>
              <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
                fullWidth
                margin="normal"
                type="text"
              />
              <TextField
                id="outlined-basic"
                label="Price"
                variant="outlined"
                fullWidth
                margin="normal"
                type="number"
              />
            </DialogContent>

            <Divider />
            <DialogContent>
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: '1 1 auto' }}></Box>
                <Button
                  size="medium"
                  variant="text"
                  onClick={() => setOpen(false)}
                >
                  Cerrar
                </Button>
                <Button
                  size="medium"
                  variant="contained"
                  sx={{ marginLeft: '10px' }}
                >
                  Crear
                </Button>
              </Box>
            </DialogContent>
          </Modal>
        </div>
      </DashboardSkeleton>
    </>
  );
};

export default MenuPage;
