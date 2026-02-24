import { Outlet } from "react-router";
import { BsTwitterX } from "react-icons/bs";
import * as Style from "./AuthLayout";

export const AuthLayout = () => {
  return (
    <Style.AuthContainer>
      <Style.FormGrup>
        <Style.Logo><BsTwitterX size={40} /> XNerd</Style.Logo>
        <Outlet />
        <Style.Footer>Copyright (©) 2026 XNerd Entreprises LTD.</Style.Footer>
      </Style.FormGrup>
      <Style.BackgroundAuth>
        <img src="/1983.jpg" alt="Background Auth" />
      </Style.BackgroundAuth>
    </Style.AuthContainer>
  )
};
