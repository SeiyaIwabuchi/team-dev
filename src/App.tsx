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
import Form from "./Form";

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
  setPageNumberHandle: (number) => void;
}

function ChangeScreen(props: IChangeScreenProps) {
  let ele: JSX.Element;
  if (props.pageNumber === 0)
    ele = <Login setPageNumberHandle={props.setPageNumberHandle} />;
  else ele = <Form />;
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
        <ChangeScreen
          pageNumber={pageNumber}
          setPageNumberHandle={setPageNumber}
        />
      </ThemeProvider>
    </Box>
  );
}
