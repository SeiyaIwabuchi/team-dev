import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import { Box, Snackbar, TextField } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#cc0c0c"
    },
    secondary: {
      main: "#ec9c9c"
    }
  }
});

export default function ButtonAppBar() {
  const [open, setOpen] = useState(false);
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <Box>
      <Box
        style={{
          display: "flex",
          height: "90vh",
          justifyContent: "center"
        }}
      >
        <Box
          style={{
            border: "1px solid red",
            borderRadius: "10px",
            textAlign: "center",
            width: "33.33vw",
            height: "33.33vh",
            marginTop: "20vh",
            padding: "10px"
          }}
        >
          <Typography style={{ fontSize: 30, height: "25%" }}>
            ログイン
          </Typography>
          <TextField
            placeholder="ログインID"
            style={{ height: "25%", width: "90%" }}
            value={loginId}
            onChange={(event) => {
              setLoginId(event.target.value);
            }}
          />
          <br />
          <TextField
            type="password"
            placeholder="パスワード"
            style={{ height: "25%", width: "90%" }}
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <br />
          <Button style={{ backgroundColor: "#ec9c9c" }} onClick={handleClick}>
            ログイン
          </Button>
        </Box>
      </Box>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={`ログインID:${loginId},パスワード:${password}`}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </Box>
  );
}
