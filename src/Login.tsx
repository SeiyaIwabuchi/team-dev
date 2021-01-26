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

interface ILoginProps {
  setPageNumberHandle: (number) => void;
  setSnackBarMsgHandle: (msg: string) => void;
  setSnackbarOpen: (isOpen: boolean) => void;
}

export default function Login(props: ILoginProps) {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [collationResult, setCollationResult] = useState(false);

  //ログインボタン押下時に呼び出される
  const loginHandleClick = () => {
    if (loginId === "NGuser") {
      props.setSnackBarMsgHandle("ログインできません");
      setCollationResult(false);
    } else {
      setCollationResult(true);
      props.setSnackBarMsgHandle(
        `ログインID:${loginId},パスワード:${password}`
      );
      props.setPageNumberHandle(1);
    }
    props.setSnackbarOpen(true);
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
          <Button
            style={{ backgroundColor: "#ec9c9c" }}
            onClick={loginHandleClick}
          >
            ログイン
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
