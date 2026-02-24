import { useState } from "react";
import { FloatingInput } from "../../components/input";

export const Login = () => {
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <span>Realize o login para continuar</span>
      <FloatingInput type="email" label="E-mail ou Username" id="email"
        onBlur={() => setIsFocusedEmail(false)}
        onFocus={() => setIsFocusedEmail(true)}
        onChange={(e) => setEmail(e.target.value)}
        isFocused={isFocusedEmail}
        hasValue={email.length > 0}
        value={email}
      />

      <FloatingInput type="password" label="Senha" id="password"
        onBlur={() => setIsFocusedPassword(false)}
        onFocus={() => setIsFocusedPassword(true)}
        onChange={(e) => setPassword(e.target.value)}
        isFocused={isFocusedPassword}
        hasValue={password.length > 0}
        value={password}
      />
    </form>
  )
};
