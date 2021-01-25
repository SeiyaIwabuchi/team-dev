import React, { useState } from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@material-ui/core";

interface ICommonProps {
  additional: Element[];
}

export default function Common(props: ICommonProps) {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            なんかさーびす
          </Typography>
          {(() => {
            return props.additional;
          })()}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
