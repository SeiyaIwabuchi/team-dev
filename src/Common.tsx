import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Snackbar,
  Toolbar,
  Typography
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

interface ICommonProps {
  additional: Element[];
  isSnackbarOpen: boolean;
  snackbarCloseHandle: (event: any, reason: any) => void;
  snackbarMsg: string;
}

export default function Common(props: ICommonProps) {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            なんかさーびす
          </Typography>
          {props.additional}
        </Toolbar>
      </AppBar>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={props.isSnackbarOpen}
        autoHideDuration={6000}
        onClose={props.snackbarCloseHandle}
        message={props.snackbarMsg}
        action={
          <React.Fragment>
            <Button
              color="secondary"
              size="small"
              onClick={props.snackbarCloseHandle}
            >
              UNDO
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={props.snackbarCloseHandle}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </Box>
  );
}
