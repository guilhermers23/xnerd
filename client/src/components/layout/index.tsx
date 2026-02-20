import { Outlet } from "react-router"
import * as Style from "./LayoutStyled";

export const Layout = () => {
  return (
    <Style.Main>
      <aside></aside>
      <Outlet />
      <aside></aside>
    </Style.Main>
  )
};
