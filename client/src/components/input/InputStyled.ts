import { colors } from './../../styles/theme';
import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  margin-top: 2rem;
  font-family: sans-serif;
  width: 100%;
`

// 2. Estilização do Rótulo (Label)
export const Label = styled.label`
  font-weight: bold;
  pointer-events: none;

  // Lógica de movimentação:
  background-color: transparent;
  padding: 0 .4rem;
  color: ${colors.gray500};
`;

// 3. Estilização do Campo (Input)
export const StyledInput = styled.input`
  color: ${colors.textDefault};
  background-color: transparent;
  width: 100%;
  padding: 1.2rem;
  border: 1px solid ${colors.gray500};
  border-radius: 1rem;
  font-size: 1.6rem;
  outline: none;
  &:focus{
    border-color: ${colors.info};
  }
`;
