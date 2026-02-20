import { Outlet } from "react-router"
import * as Style from "./LayoutStyled";
import { SideBar } from "../sidebar";

export const Layout = () => {
  return (
    <Style.Main>
      <SideBar />
      <Outlet />
      <aside></aside>
    </Style.Main>
  )
};
