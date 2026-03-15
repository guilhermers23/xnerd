import React from "react";
import * as Style from "./InputStyled";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string,
};

export const FloatingInput = ({ label, ...props }: Props) => {
  return (
    <Style.InputContainer>
      <Style.Label>{label}</Style.Label>
      <Style.StyledInput {...props} />
    </Style.InputContainer>
  )
};
