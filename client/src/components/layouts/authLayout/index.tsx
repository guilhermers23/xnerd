import { BsTwitterX } from "react-icons/bs";
import * as Style from "./AuthLayout";

type Props = { children: React.ReactNode };

export const AuthLayout = ({ children }: Props) => {
  return (
    <Style.AuthContainer>
      <Style.FormGrup>
        <Style.Logo><BsTwitterX size={40} /> XNerd</Style.Logo>
        {children}
        <Style.Footer>Copyright (©) 2026 XNerd Entreprises LTD.</Style.Footer>
      </Style.FormGrup>
      <Style.BackgroundAuth>
        <img src="/1983.jpg" alt="Background Auth" />
      </Style.BackgroundAuth>
    </Style.AuthContainer>
  )
};
