import styled from "styled-components";
import { colors } from "../../styles/theme";

export const SectionFollow = styled.section`
  border: 1px solid ${colors.gray400};
  border-bottom: none;
`

export const Follow = styled.section`
  font-size: 1.6rem;
  color: ${colors.textDefault};
  background-color: transparent;
  border: none;
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding: 1rem;

  &:hover{
    background-color: ${colors.gray800};
  }
  `

export const HeaderFollow = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: .5rem;
  gap: 1rem;

   span{
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p{
      font-size: 1.5rem;
      color: ${colors.gray400};
    }
    }
`
