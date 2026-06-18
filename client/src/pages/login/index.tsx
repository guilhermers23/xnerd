import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useLoginMutation } from "../../services/Auth.Service";

import { FloatingInput } from "../../components/input";
import { Form } from "../../components/form";
import { ResponseError } from "../../utils/ultilsFuction";

interface IData { username: string, password: string };

export const Login = () => {
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const { register, handleSubmit, reset } = useForm<IData>();

  const onSubmit: SubmitHandler<IData> = async (data) => {
    try {
      const res = await login(data).unwrap();
      Cookies.set("token", res.access, { expires: 1 });
      Cookies.set("refresh", res.refresh, { expires: 7 });

      reset();
      navigate("/");
    } catch (error ) {
      ResponseError(error, "Erro ao fazer login");
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}
      title="Bem-vindo de Volta"
      subtitle="Insira seu e-mail e senha para acessar sua conta."
      buttonTitle="Entrar"
      textFooter="Ainda não possui conta?"
      textLink=" Cadastre-se"
      path="/register"
      disabled={isLoading}>

      <FloatingInput type="email" label="E-mail ou Username" id="email"
        {...register("username")}
        required
      />

      <FloatingInput type="password" label="Senha" id="password"
        {...register("password")}
        required
      />
    </Form>
  )
};
