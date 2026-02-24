import styled from "styled-components";
import { colors } from "../../styles/theme";
import { Link } from "react-router";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 70%;
  margin: 0 auto;
  gap: 1rem;
`

export const FormCabecalho = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;

  h3{
    font-size: 3rem;
    font-weight: bold;
  }

  p{
    color: ${colors.gray300};
  }
`

export const Button = styled.button`
  color: ${colors.textDefault};
  margin-top: 1.5rem;
  font-size: 1.3rem;
  font-weight: 700;
  padding: 1rem 0;
  width: 100%;
  border: none;
  background-color: ${colors.info};
  border-radius:1rem;
  cursor: pointer;

  &:hover{
    background-color: ${colors.primary};
  }
`

export const FooterForm = styled.span`
  margin-top: 1rem;
  gap: .5rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-top: 1px solid ${colors.gray300};
`

export const LinkStyle = styled(Link)`
  color: ${colors.info};
  text-decoration: none;
`
