import { createGlobalStyle } from "styled-components";
import { colors } from "./theme";

export const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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