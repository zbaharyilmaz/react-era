import React from "react";
import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#003547', // Ana renk
    },
    secondary: {
      main: '#ffc107', // İkincil renk
    },
    background: {
      default: '#ebdbdb', // Arka plan rengi
    },
    text: {
      primary: '#ffffff', // Ana metin rengi
      secondary: '#005e54', // İkincil metin rengi
    },
  },
  typography: {
    fontFamily: 'Syne Mono, monospace', // Font ailesi
    h4: {
      fontWeight: 700, // Başlıklar için font ağırlığı
    },
  },
  spacing: 8, // Default spacing birimi
});

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Navbar />
      <AppRouter />
      <ToastContainer />
      </ThemeProvider>
    </div>
  );
};

export default App;
