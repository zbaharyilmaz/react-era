// src/pages/Register.jsx
import React, { useState } from "react";
import { Button, TextField, Container, Typography } from "@mui/material";
import { toastSuccess } from "../helper/Toastify";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (email && password) {
      toastSuccess("Registration Successful!");
    } else {
      toastError("Please fill all fields");
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Register Page
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleRegister}
      >
        Register
      </Button>
    </Container>
  );
};

export default Register;
