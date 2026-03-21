import styled from "styled-components";
import { Container } from "../../styles/GlobalStyles";
import { colors } from "../../styles/theme";

export const ContainerCard = styled(Container)`
  display: flex;
  align-items: flex-start;
  width: 100%;
`

export const BodyPost = styled.article`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 1rem;

  img{
    width: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }
`

export const IconsList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  align-items: center;

  span{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    }
`

export const HeaderPost = styled.span`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 1.5rem;
  text-align: left;

  h3{
    font-weight: bold;
  }

  i{
    font-size: 1.2rem;
    color: ${colors.gray400};
  }
`
