import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

function App() {
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {/* //! Bu prop, Provider bileşenine Redux store'unu iletmek için kullanılır. İlk store prop'un adıdır, ikinci store ise import ettiğiniz Redux store'un kendisidir. */}
          <AppRouter />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
