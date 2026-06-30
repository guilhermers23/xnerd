import styled, { keyframes } from 'styled-components';
import { colors } from '../../styles/theme';

// Animação para o modal surgir na tela
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: ${colors.gray800};
  padding-bottom: 2rem;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.3s ease-out;
  position: relative;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    width: 90%;
    height: 90%;
    overflow-y: auto;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: .5rem;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 3rem;
  cursor: pointer;
  color: #ffffff;

  &:hover {
    color: #333333;
  }
`;
