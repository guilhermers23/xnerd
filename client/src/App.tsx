import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};
