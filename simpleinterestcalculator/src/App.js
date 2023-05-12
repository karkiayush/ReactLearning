import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
// import * as React from "react";

import "./index.css";

const App = () => {
  const [p, setP] = useState(0);
  const [t, setT] = useState(0);
  const [r, setR] = useState(0);
  const [si, setSi] = useState(0);
  // const siDisplay = 0;

  const siValue = () => {
    setSi((p * t * r) / 100);
  };
  return (
    <div className="App">
      {/* Start of body  */}

      {/* <p>Hello we are learning to use MUI components in react</p> */}
      <AppBar position="static">
        <Toolbar>
          {/* icon button is like app drawer of flutter  */}
          {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple Interest
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>

      {/* Input box  */}
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        id="input-box"
      >
        <TextField
          onChange={(event) => setP(event.target.value)}
          id="outlined-basic"
          label="Principle"
          variant="outlined"
        />

        <TextField
          onChange={(event) => setR(event.target.value)}
          id="outlined-basic"
          label="Time"
          variant="outlined"
        />

        <TextField
          onChange={(event) => setT(event.target.value)}
          id="outlined-basic"
          label="Rate"
          variant="outlined"
        />
      </Box>

      <Typography variant="h6" gutterBottom>
        Simple Interest: {si}
      </Typography>

      <div className="sicalculate-btn">
        <Stack spacing={2} direction="row">
          <Button onClick={() => siValue()} variant="contained">
            Calculate
          </Button>
        </Stack>
      </div>

      {/* End of body  */}
    </div>
  );
};

export default App;
