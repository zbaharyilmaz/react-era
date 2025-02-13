import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import user from "../assets/user.png";

const Login = () => {
  let { email, password } = useSelector((state) => state.authSlice);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser({ email, password }));
    navigate("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="avatar_img"
          src={user}
          sx={{
            width: 100,
            height: 100,
            border: "2px solid var(--color-texture-1)",
          }}
        />
        <Typography
          component="h1"
          variant="h5"
          sx={{ marginTop: 2, fontFamily: "inherit" }}
        >
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            placeholder="admin@example.com"
            autoFocus
            onChange={(e) => (email = e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            placeholder="12345"
            id="password"
            onChange={(e) => (password = e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "var(--color-texture-1)",
              fontFamily: "inherit",
              padding: "0.5rem",
              "&:hover": {
                backgroundColor: "var(--color-texture-5)",
              },
            }}
          >
            Sign In
          </Button>
        </Box>
      </Box>

      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://github.com/zbaharyilmaz">
          zbaharyilmaz
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  );
};

export default Login;
