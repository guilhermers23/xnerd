import { useState } from "react";
import { FloatingInput } from "../../components/input";
import { Form } from "../../components/form";

export const Login = () => {
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <Form onSubmit={handleSubmit}
      title="Bem-vindo de Volta"
      subtitle="Insira seu e-mail e senha para acessar sua conta."
      buttonTitle="Entrar"
      textFooter="Ainda não possui conta?"
      textLink=" Cadastre-se"
      path="/register">

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
    </Form>
  )
};
