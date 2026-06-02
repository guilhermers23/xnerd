import { Provider } from "react-redux";
import { store } from "./store";
import AppRoutes from "./routes";

export const App = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  )
};
