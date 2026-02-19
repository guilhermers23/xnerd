import styled from "styled-components";
import { Container } from "../../styles/GlobalStyles";
import { colors } from "../../styles/theme";

export const ContainerCard = styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

export const BodyPost = styled.article`
  display: flex;
  width: 100%;
  padding: 1rem;
  align-items: center;

  img{
    width: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }
`

export const HeaderPost = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 1rem;
  text-align: left;

  h3{
    font-weight: bold;
  }

  i{
    font-size: 1.2rem;
    color: ${colors.gray400};
  }
`
