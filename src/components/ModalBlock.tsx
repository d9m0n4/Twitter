import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useStylesSignIn } from '../Pages/SignIn';

interface ModalProps {
  children: React.ReactNode;
  title?: string;
  classes?: ReturnType<typeof useStylesSignIn>;
  open?: boolean;
  onClose: () => void;
}

export const ModalDialog: React.FC<ModalProps> = ({
  title,
  onClose,
  open = false,
  children,
}: ModalProps): React.ReactElement | null => {
  if (!open) {
    return null;
  }
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        <IconButton onClick={onClose} color="secondary">
          <CloseIcon style={{ fontSize: 36 }} color="secondary" />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};
