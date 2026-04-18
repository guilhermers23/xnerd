import styled, { createGlobalStyle } from "styled-components";
import { colors } from "./theme";

export const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;

    a{
      color: ${colors.textDefault};
    }

    :visited{
      color: ${colors.textDefault};
    }
}

html {
    font-size: 62.5%;
}

body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.6rem;
    /* Equivalente a 16px */
    background: ${colors.gray900};
    color: ${colors.textDefault};
}
`

export const breakpoints = {
  desktop: "1024px",
  tablet: "768px",
  mobile: "468px"
};

export const Container = styled.div`
  margin: auto;
  padding: 1.2rem;
  width: 100%;
  align-items: center;
  border: solid 1px ${colors.gray400};
`

export const Cabecalho = styled.div`
  position: sticky;
  top: 0;
  background-color: ${colors.gray900};
  opacity: 0.8;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px ${colors.gray500};
  border-top: none;
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

  &:disabled{
    cursor: not-allowed;
  }
`
