import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";

import type { IUser } from "../../types/IUser";

import { useRegisterMutation } from "../../services/Auth.Service"
import { genereteUsername } from "../../utils/ultilsFuction";

import { Form } from "../../components/form";
import { FloatingInput } from "../../components/input";

interface IData extends Omit<IUser, 'id'> { confirmPassword: string };

export const Register = () => {
  const navigate = useNavigate();
  const [registerService, { isLoading }] = useRegisterMutation();

  const { handleSubmit, register, reset } = useForm<IData>({
    defaultValues: {
      cover: null,
      following: "0",
      profile_image: null,
    }
  }
  );

  const onSubmit: SubmitHandler<IData> = async (data) => {
    data.username = genereteUsername(data.name);

    if (data.password == data.confirmPassword) {
      const res = await registerService(data);
      console.log(res);

      if (res.error) {
        console.log(res.error);
        alert("Ocorreu erro ao tentar realizar cadastrado.");
        return;
      };

      alert("Cadastro realizado com sucesso!");
      reset();
      navigate("/login");
    } else {
      alert("As senha não são iguais.")
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

      <FloatingInput type="password" label="Senha" id="password"
        {...register("password")}
        required
      />

      <FloatingInput type="password" label="Confirme sua Senha" id="confirmPassword"
        {...register("confirmPassword")}
        required
      />

    </Form>
  )
};
