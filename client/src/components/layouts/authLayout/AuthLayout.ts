import styled from "styled-components";
import { colors } from "../../../styles/theme";

export const AuthContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
`

export const FormGrup = styled.section`
  display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
    padding: 1rem;
`

export const Logo = styled.header`
  font-size: 3rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`

export const BackgroundAuth = styled.div`
  width: 100%;

  img{
    border-radius: 5rem;
    padding: 1rem;
    width: 100%;
    height: 99vh;
    object-fit: cover;
  }
`

export const Footer = styled.footer`
font-size: 1.4rem;
  color: ${colors.gray300};
  padding: 1rem;
`
