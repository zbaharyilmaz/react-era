import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store from "./app/store";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Provider store={store}>
          {/* //! Bu prop, Provider bileşenine Redux store'unu iletmek için kullanılır. İlk store prop'un adıdır, ikinci store ise import ettiğiniz Redux store'un kendisidir. */}
          <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
