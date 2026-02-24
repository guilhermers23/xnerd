import { BrowserRouter, Route, Routes } from "react-router";
import { Provider } from "react-redux";
import { store } from "./store";
import { LayoutDefault } from "./components/layouts/layoutDefault";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<LayoutDefault />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
};
