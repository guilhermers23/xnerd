import type { JSX } from "react";
import * as Style from "./ModalStyled";
import { Cabecalho } from "../../styles/GlobalStyles";

type PropsModal = { isOpen: boolean, onClose: () => void, children: JSX.Element };

export const Modal = ({ children, isOpen, onClose }: PropsModal) => {
  if (!isOpen) return null;

  return (
    <Style.Overlay>
      <Style.ModalContainer>
        <Cabecalho style={{border: "none"}}>Editar Perfil</Cabecalho>
        <Style.CloseButton onClick={onClose}>&times;</Style.CloseButton>
        {children}
      </Style.ModalContainer>
    </Style.Overlay>
  )
};
