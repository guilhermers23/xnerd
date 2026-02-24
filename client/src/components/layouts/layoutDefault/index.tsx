import { Outlet } from "react-router"
import { SideBar } from "../../sidebar";
import * as Style from "./LayoutStyled";

export const LayoutDefault = () => {
  return (
    <Style.Main>
      <SideBar />
      <Outlet />
      <aside></aside>
    </Style.Main>
  )
};
