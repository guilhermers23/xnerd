import { Provider } from "react-redux";
import { store } from "./store";
import AppRoutes from "./routes";
import { Toastify } from "./components/toastify";

export const App = () => {
  return (
    <Provider store={store}>
      <Toastify />
      <AppRoutes />
    </Provider>
  )
};
