import { AuthLayout } from "../layouts/authLayout";
import * as Style from "./FormStyled";

type Props = {
  title: string,
  subtitle: string,
  buttonTitle: string,
  children: React.ReactNode,
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  textFooter: string,
  textLink: string,
  path: string,
  disabled: boolean
};

export const Form = ({ title, subtitle, buttonTitle, children, onSubmit, textFooter, textLink, path, disabled }: Props) => {
  return (
    <AuthLayout>
      <Style.FormContainer onSubmit={onSubmit}>
        <Style.FormCabecalho >
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </Style.FormCabecalho>
        {children}
        <Style.Button type="submit" disabled={disabled}>{buttonTitle}</Style.Button>
        <Style.FooterForm>
          <p>{textFooter}</p>
          <Style.LinkStyle to={path}> {textLink}</Style.LinkStyle>
        </Style.FooterForm>
      </Style.FormContainer>
    </AuthLayout>
  )
};
