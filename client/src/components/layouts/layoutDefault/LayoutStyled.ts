import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  grid-template-columns: 25% 50% 25%;
  max-width: 1280px;
  text-align: center;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 30% 70%;
  }
`
