import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";

import { useRegisterMutation } from "../../services/Auth.Service"
import { genereteUsername, ResponseError } from "../../utils/ultilsFuction";

import { Form } from "../../components/form";
import { FloatingInput } from "../../components/input";
import { ToastEmitter } from "../../components/toastify";

interface IData extends Omit<IUser, 'id'> { confirmPassword: string };

export const Register = () => {
  const navigate = useNavigate();
  const [registerService, { isLoading }] = useRegisterMutation();

  const { handleSubmit, register, reset } = useForm<IData>({
    defaultValues: {
      cover: null,
      following: [],
      profile_image: null,
    } }
  );

  const onSubmit: SubmitHandler<IData> = async (data) => {
    data.username = genereteUsername(data.name);

    if (data.password !== data.confirmPassword)
      return ToastEmitter("As senha não são iguais.", "warning");

    try {
      const res = await registerService(data).unwrap();
      console.log(res);
      ToastEmitter("Cadastro realizado com sucesso!", "sucess");
      reset();
      navigate("/login");
    } catch (error) {
      ResponseError(error, "Erro ao realizar o cadastro");
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}
      title="Crie uma Conta"
      subtitle="Junte-se agora para saber o que está acontecendo no mundo."
      buttonTitle="Cadastar-se"
      textFooter="Já possui conta?"
      textLink="Login"
      path="/login"
      disabled={isLoading}>

      <FloatingInput type="name" label="Nome Completo" id="name"
        {...register("name")}
        required
      />

      <FloatingInput type="email" label="E-mail" id="email"
        {...register("email")}
        required
      />

      <FloatingInput type="date" label="Data de Nascimento" id="date"
        {...register("birth_date")}
        required
      />

      <FloatingInput min={6} type="password" label="Senha" id="password"
        {...register("password")}
        required
      />

      <FloatingInput min={6} type="password" label="Confirme sua Senha" id="confirmPassword"
        {...register("confirmPassword")}
        required
      />

    </Form>
  )
};
