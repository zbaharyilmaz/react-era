import {
  Box,
  Container,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import * as React from "react";
import Switch from "@mui/material/Switch";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";


const TextFieldComp = () => {
  const [erroR, setErroR] = useState(false);
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];
  return (
    <div>
      <Container>
        <Box>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your currency"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Typography variant="h4" align="center" gutterBottom>
          Costumes
        </Typography>
        <Box onClick={() => setErroR(true)} sx={{ m: 2 }}>
          <TextField
            required
            id="outlined-basic"
            label="required"
            variant="outlined"
            defaultValue="Enter an email"
            margin="dense"
            sx={{ m: 2 }}
          />
          <FormControl variant="standard" margin="dense" sx={{ m: 2 }}>
            <InputLabel htmlFor="input-with-icon-adornment">
              With a start adornment
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircleIcon />
                </InputAdornment>
              }
            />
          </FormControl>

          <div>
            <Switch {...label} defaultChecked />
            <Switch {...label} />
            <Switch {...label} disabled defaultChecked />
            <Switch {...label} disabled />
          </div>
          </Box>
          <Box>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={erroR ? "password" : "text"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toogle password"
                    onClick={() => setErroR(!erroR)}
                    edge="end"
                  >
                    {erroR ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <TextField
            id="outlined-helperText"
            label="Country"
            defaultValue="  Enter a country"
            helperText={erroR ? "Please enter a valid country" : ""}
            variant="outlined"
            sx={{ m: 2 }}
          />
          <TextField
            color="secondary"
            id="outlined-secondary"
            label="error"
            error={erroR}
            defaultValue="Hello World"
            variant="outlined"
            sx={{ m: 2 }}
            fullWidth
          />
          <TextField label="Outlined secondary" color="secondary" focused />
          <TextField
            label="Filled primary"
            variant="filled"
            color="primary"
            focused
          />
          <TextField label="Filled" variant="filled" color="success" focused />
          <TextField
            label="Standard warning"
            variant="standard"
            color="warning"
            focused
          />
             </Box>
      </Container>
    </div>
  );
};

export default TextFieldComp;
