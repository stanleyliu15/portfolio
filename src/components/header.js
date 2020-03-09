import React from "react"
import styled from "styled-components"

import { theme } from "../styles"

const { fontSizes, palette } = theme

const StyledHeader = styled.header`
  > h1 {
    font-size: ${fontSizes.xxxLarge};
    color: ${palette.blue};
  }

  > h2 {
    font-size: ${fontSizes.regular};
  }
`

const Header = () => (
  <StyledHeader>
    <h1>Stanley Liu</h1>
    <h2>Software Engineer</h2>
  </StyledHeader>
)

export default Header
