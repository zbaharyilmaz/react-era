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
import { kullaniciOlustur } from "../features/yetkiSlice";
import { useNavigate } from "react-router-dom";
import { yetkiSlice } from "../features/yetkiSlice";

const Login = () => {
 let { email, password } = useSelector((state) => state.yetkiSlice);

  const navigate=useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
   dispatch(kullaniciOlustur({email, password}))
    // payload ifadesi, dışarıdan gelen veriyi ifade eder. 
    // payload, dispatch çağrıldığında kullaniciOlustur fonksiyonuna iletilen veriyi tutar.
    //Eğer dispatch(kullaniciOlustur({ email: "abc@xyz.com", password: "1234" })) diye bir şey yazarsak,
    // o zaman payload'da { email: "abc@xyz.com", password: "1234" } verisi bulunur.
  
  navigate("/")};

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
          src="https://cdn.pixabay.com/photo/2017/03/21/02/00/user-2160923_960_720.png"
          sx={{ width: 100, height: 100 }}
        />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {/* noValidate=doğrulanmasın
        autocomplete=Otomatik Tamamlama listesi, siz yazmaya başladığınızda adlara ve e-posta adreslerine ilişkin önerileri görüntüleyen bir özelliktir. Bu öneriler, gönderdiğiniz e-posta mesajlarındaki ad ve e-posta adresleri listesindeki olası eşleşmelerdir.
         */}
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
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
            id="password"
            onChange={(e) => (password = e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 3, mb: 2 }}
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
