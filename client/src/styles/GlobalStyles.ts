import styled, { createGlobalStyle } from "styled-components";
import { colors } from "./theme";

export const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;

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
  margin: 0 auto;
  padding: 1rem;
  max-width: 560px;
  width: 100%;
  align-items: center;
  border: solid 1px ${colors.gray500};
  border-radius: 1.6rem
`
