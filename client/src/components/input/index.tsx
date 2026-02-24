import React from "react";
import * as Style from "./InputStyled";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string,
  hasValue: boolean,
  isFocused: boolean
};

export const FloatingInput = ({ label, hasValue, isFocused, ...props }: Props) => {
  return (
    <Style.InputContainer>
      <Style.StyledInput hasValue={hasValue} isFocused={isFocused} {...props} />
      <Style.Label isFocused={isFocused} hasValue={hasValue}>{label}</Style.Label>
    </Style.InputContainer>
  )
};
