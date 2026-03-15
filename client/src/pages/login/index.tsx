import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useLoginMutation } from "../../services/Auth.Service";
import { FloatingInput } from "../../components/input";
import { Form } from "../../components/form";

interface IData { username: string, password: string };

export const Login = () => {
  const navigate = useNavigate();
  const [login, { isError, isLoading }] = useLoginMutation();
  const { register, handleSubmit, reset } = useForm<IData>();

  const onSubmit: SubmitHandler<IData> = async (data) => {
    const res = await login(data);
    if (isError) {
      console.log(res.error);
      alert(res.error.data.detail);
      return;
    };

    if ("data" in res && res.data) {
      Cookies.set("token", res.data.access, { expires: 1 }); // Access res.data safely
      Cookies.set("refresh", res.data.refresh, { expires: 7 });
      reset();
      navigate("/");
    };
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
