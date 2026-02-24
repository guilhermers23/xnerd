import { useState } from "react";
import { FloatingInput } from "../../components/input";
import * as Style from "./LoginStyled";

export const Login = () => {
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Style.FormContainer>
      <Style.FormCabecalho >
        <h3>Bem-Vindo de Volta</h3>
        <p>Insira seu e-mail e senha para acessar sua conta.</p>
      </Style.FormCabecalho>

      <FloatingInput type="email" label="E-mail ou Username" id="email"
        onBlur={() => setIsFocusedEmail(false)}
        onFocus={() => setIsFocusedEmail(true)}
        onChange={(e) => setEmail(e.target.value)}
        isFocused={isFocusedEmail}
        hasValue={email.length > 0}
        value={email}
        required
      />

      <FloatingInput type="password" label="Senha" id="password"
        onBlur={() => setIsFocusedPassword(false)}
        onFocus={() => setIsFocusedPassword(true)}
        onChange={(e) => setPassword(e.target.value)}
        isFocused={isFocusedPassword}
        hasValue={password.length > 0}
        value={password}
        required
      />

      <Style.Button type="submit">Entrar</Style.Button>
      <Style.FooterForm>
        <p>Ainda não possui conta?</p>
        <Style.LinkStyle to="/register"> Cadastre-se</Style.LinkStyle>
      </Style.FooterForm>
    </Style.FormContainer>
  )
};
