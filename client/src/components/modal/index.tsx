import type { JSX } from "react";
import { Cabecalho } from "../../styles/GlobalStyles";
import * as Style from "./ModalStyled";

type PropsModal = { isOpen: boolean, onClose: () => void, children: JSX.Element, title: string };

export const Modal = ({ children, isOpen, onClose, title }: PropsModal) => {
  if (!isOpen) return null;

  return (
    <Style.Overlay>
      <Style.ModalContainer>
        <Cabecalho style={{border: "none"}}>{title}</Cabecalho>
        <Style.CloseButton onClick={onClose}>&times;</Style.CloseButton>
        {children}
      </Style.ModalContainer>
    </Style.Overlay>
  )
};
