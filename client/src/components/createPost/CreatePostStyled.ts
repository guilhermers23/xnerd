import styled from "styled-components";
import { colors } from "../../styles/theme";

export const Cabecalho = styled.div`
  position: sticky;
  top: 0;
  background-color: ${colors.gray900};
  opacity: 0.8;
  max-width: 560px;
  margin: 0 auto;
  padding: 2rem;
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  border: solid 1px ${colors.gray500};
`

export const Card = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem auto;
  padding: 1rem 1.6rem;
  border-bottom: solid 1px ${colors.gray500};
`

export const ListIcons = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  div{
    display: flex;
    justify-content: center;
    gap: 1.6rem;
    padding: 0 4rem;
  }
`

export const Button = styled.button`
  font-weight: bold;
  background-color: ${colors.info};
  color: ${colors.textDefault};
  padding: 1.2rem 1.6rem;
  border-radius: 1.6rem;
  border: none;
  cursor: pointer;
  &:hover{
    background-color: ${colors.linkHover};
  }
`

export const Input = styled.textarea`
  width: 100%;
  font-size: 1.6rem;
  height: 5.6rem;
  margin: 0 1rem;
  padding: 1.6rem;
  border: none;
  resize: none;
  color: ${colors.textDefault};
  background-color: transparent;
  overflow: hidden;

  &:focus{
    outline: none;
  }
`

export const UploadIcon = styled.input`
  display: none;
`

