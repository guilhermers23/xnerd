import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { store } from "./store";
import { Provider } from "react-redux";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
};
