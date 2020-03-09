import { createGlobalStyle } from "styled-components"
import { normalize } from "polished"

import fontFaces from "./fontFaces"
import { theme } from "."

const { fonts, fontWeights, palette, fontSizes, letterSpace, lineHeights } = theme

const GlobalStyle = createGlobalStyle`
  ${normalize()}
  ${fontFaces}

  html {
    box-sizing: border-box;
    font-family: ${fonts.BrandonGrotesque};
  }

  *, *:after, *:before {
    box-sizing: inherit;
  }

  body {
    color: ${palette.white};
    background-color: ${palette.bunker};
    font-size: ${fontSizes.regular};
    font-weight: ${fontWeights.regular};
    letter-spacing: ${letterSpace.small};
    line-height: ${lineHeights.small};
  }

  th {
    font-weight: ${fontWeights.bold};
  }

  a {
    text-decoration: none;
  }

  input, textarea, select {
    color: inherit;
    font-family: inherit;
  }

  button {
    cursor: pointer;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  svg {
    fill: currentColor;
    stroke: currentColor;
    vertical-align: middle !important;
  }

  time {
    color: ${palette.gray};
    font-size: ${fontSizes.small};
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0;
  }

  h1 { font-weight: ${fontWeights.bold}; }
  h2 { font-weight: ${fontWeights.semiBold}; }

  &::selection {
    background-color: ${palette.selection};
  }
`

export default GlobalStyle
