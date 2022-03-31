import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { Box } from '@mui/system';
import React, { FunctionComponent } from 'react';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
};

const Modal: FunctionComponent<ModalProps> = ({
  open,
  onClose,
  children,
  title,
}) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      {title ? <DialogTitle>{title}</DialogTitle> : null}
      {children}
    </Dialog>
  );
};

export default Modal;
