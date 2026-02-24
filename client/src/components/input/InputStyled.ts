import { colors } from './../../styles/theme';
import styled from "styled-components";

type Props = { isFocused: boolean, hasValue: boolean };

export const InputContainer = styled.div`
  position: relative;
  margin-top: 2rem;
  font-family: sans-serif;
  width: 100%;
`

// 2. Estilização do Rótulo (Label)
export const Label = styled.label<Props>`
  font-weight: bold;
  position: absolute;
  left: 1.2rem;
  transition: all 0.2s ease;
  pointer-events: none;

  // Lógica de movimentação:
  // Se estiver focado OU tiver texto, ele sobe e diminui
  top: ${props => (props.isFocused || props.hasValue ? '-1.4rem' : '1.2rem')};
  font-size: ${props => (props.isFocused || props.hasValue ? '1.3rem' : '1.6rem')};
  background-color: transparent;
  padding: 0 .4rem;
  color: ${props => (props.isFocused ? `${colors.info}` : `${colors.gray500}`)};
`;

// 3. Estilização do Campo (Input)
export const StyledInput = styled.input<Props>`
  color: ${colors.textDefault};
  background-color: transparent;
  width: 100%;
  padding: 1.2rem;
  border: 1px solid ${props => (props.isFocused ? `${colors.info}` : `${colors.gray400}`)};
  border-radius: 1rem;
  font-size: 1.6rem;
  outline: none;
  transition: border-color 0.2s;
`;
