import { Box, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

const TextFieldComp = () => {
  const [error, setError] = useState(false);
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
  return (
    <div>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Costumes
        </Typography>
        <Box onClick={() => setError(true)} sx={{ m: 2 }}>
          <TextField
            required
            id="outlined-basic"
            label="required"
            variant="outlined"
            defaultValue="Enter an email"
            margin="dense"
            sx={{ m: 2 }}
          />

          <TextField
            id="outlined-helperText"
            label="Country"
            defaultValue="  Enter a country"
            helperText={error ? "Please enter a valid country" : ""}
            variant="outlined"
            sx={{ m: 2 }}
          />
          <TextField
            color="secondary"
            id="outlined-secondary"
            label="Secondary"
            error={error}
            label="Error"
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
                focused/>
          <TextField
            label="Filled"
            variant="filled"
            color="success"
            focused
          />
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
