import styled from "styled-components";
import { colors } from "../../styles/theme";

export const Header = styled.header`
  display: none;
  z-index: 1;
  position: sticky;
  top: 0;
  align-items: center;
  background-color: ${colors.gray900};
  border: solid 1px ${colors.gray500};
  border-top: none;

  nav{
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    display: block;
  }
`
