import styled from "styled-components";
import { colors } from "../../styles/theme";

export const Card = styled.section`
  max-width: 598px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem auto;
  padding: 1rem 1.6rem;
  border-bottom: solid 1px ${colors.gray500};
`

export const ProfileIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`

export const Button = styled.button`
  font-weight: bold;
  background-color: ${colors.info};
  color: ${colors.textDefault};
  padding: 1.2rem 1.6rem;
  border-radius: 1.6rem;
  border: none;
  cursor: pointer;
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
