import React from "react";
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

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
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              なんかさーびす
            </Typography>
            <Button color="inherit" style={{ backgroundColor: "#ec9c9c" }}>
              ろぐいん
            </Button>
          </Toolbar>
        </AppBar>
        <div
          style={{
            borderWidth: 1,
            height: "10",
            width: "10",
            marginTop: "100px",
            backgroundColor: "#000000"
          }}
        />
        <Button />
      </ThemeProvider>
    </div>
  );
}
