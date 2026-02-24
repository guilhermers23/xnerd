import { useState } from "react";
import { Form } from "../../components/form";
import { FloatingInput } from "../../components/input";

export const Register = () => {
  const [isFocusedName, setIsFocusedName] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isFocusedConfirmPassword, setIsFocusedConfirmPassword] = useState(false);
  const [isFocusedDateBirth, setIsFocusedDateBirth] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email, birthDate, password, confirmPassword);
  };

  return (
    <Form onSubmit={handleSubmit}
      title="Crie uma Conta"
      subtitle="Junte-se agora para saber o que está acontecendo no mundo."
      buttonTitle="Cadastar-se"
      textFooter="Já possui conta?"
      textLink="Login"
      path="/login" >

      <FloatingInput type="name" label="Nome Completo" id="name"
        onBlur={() => setIsFocusedName(false)}
        onFocus={() => setIsFocusedName(true)}
        onChange={(e) => setName(e.target.value)}
        isFocused={isFocusedName}
        hasValue={name.length > 0}
        value={name}
        required
      />

      <FloatingInput type="email" label="E-mail" id="email"
        onBlur={() => setIsFocusedEmail(false)}
        onFocus={() => setIsFocusedEmail(true)}
        onChange={(e) => setEmail(e.target.value)}
        isFocused={isFocusedEmail}
        hasValue={email.length > 0}
        value={email}
        required
      />

      <FloatingInput type="date" label="Data de Nascimento" id="date"
        onBlur={() => setIsFocusedDateBirth(false)}
        onFocus={() => setIsFocusedDateBirth(true)}
        onChange={(e) => setBirthDate(e.target.value)}
        isFocused={isFocusedDateBirth}
        hasValue={birthDate.length > 0}
        value={birthDate}
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

      <FloatingInput type="password" label="Confirme sua Senha" id="confirmPassword"
        onBlur={() => setIsFocusedConfirmPassword(false)}
        onFocus={() => setIsFocusedConfirmPassword(true)}
        onChange={(e) => setConfirmPassword(e.target.value)}
        isFocused={isFocusedConfirmPassword}
        hasValue={confirmPassword.length > 0}
        value={confirmPassword}
        required
      />

    </Form>
  )
};
