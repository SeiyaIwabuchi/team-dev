import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Box, Button, CssBaseline } from "@material-ui/core";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";

import Common from "./Common";
import Login from "./Login";

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

interface IChangeScreenProps {
  pageNumber: number;
}

function ChangeScreen(props: IChangeScreenProps) {
  let ele: JSX.Element;
  if (props.pageNumber === 0) ele = <Login />;
  return ele;
}

export default function App() {
  const [pageNumber, setPageNumber] = useState(0);
  return (
    <Box>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Common
          additional={[
            <Button style={{ backgroundColor: "#ec9c9c" }}>ろぐいん</Button>
          ]}
        />
        <ChangeScreen pageNumber={0} />
      </ThemeProvider>
    </Box>
  );
}
