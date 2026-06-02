import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { LayoutDefault } from "../components/layouts/layoutDefault";
import { Home } from "../pages/home";
import { Profile } from "../pages/profile";
import { Follow } from "../pages/follow";
import { PostDetail } from "../pages/post";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LayoutDefault />}>
          <Route index element={<Home />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/connect_people" element={<Follow />} />
          <Route path="/post/detail/:postID" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default AppRoutes;
