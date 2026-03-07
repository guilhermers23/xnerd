import { useState } from "react";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import { useLoginMutation } from "../../services/Auth.Service";
import { FloatingInput } from "../../components/input";
import { Form } from "../../components/form";

export const Login = () => {
  const navigate = useNavigate();
  const [login, { isError, isLoading, isSuccess }] = useLoginMutation();
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const data = { username, password };
    console.log(data);
    const res = await login(data);

    try {
      console.log(res);
      if (res.error) {
        console.error(res.error);
        return;
      }

      Cookies.set("token", res.data.access, { expires: 1 }); // Access res.data safely
      Cookies.set("refresh", res.data.refresh);
      navigate("/");
    } catch (error) {
      console.error(error);
      return;
    }
  };

  return (
    <Form onSubmit={handleSubmit}
      title="Bem-vindo de Volta"
      subtitle="Insira seu e-mail e senha para acessar sua conta."
      buttonTitle="Entrar"
      textFooter="Ainda não possui conta?"
      textLink=" Cadastre-se"
      path="/register"
      disabled={isLoading}>

      <FloatingInput type="email" label="E-mail ou Username" id="email"
        onBlur={() => setIsFocusedEmail(false)}
        onFocus={() => setIsFocusedEmail(true)}
        onChange={(e) => setUsername(e.target.value)}
        isFocused={isFocusedEmail}
        hasValue={username.length > 0}
        value={username}
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
