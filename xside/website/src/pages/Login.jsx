// src/pages/Login.jsx
import React, { useState } from "react";
import { Button, TextField, Container, Typography } from "@mui/material";
import { toastError } from "../helper/Toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (email && password) {
      toastError("Logged In Successfully!");
    } else {
      toastError("Please fill all fields");
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Login Page
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
        onClick={handleSubmit}
      >
        Login
      </Button>
    </Container>
  );
};

export default Login;
