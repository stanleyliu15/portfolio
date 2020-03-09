import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { transparentize } from "polished"

import { theme, mixins } from "../styles"

const { palette } = theme

const Navigation = styled.nav`
  > .active-link {
    color: ${palette.blue};

    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: -10px;

      background-color: ${transparentize(0.5, palette.blue)};
      border: 1px solid ${palette.blue};
      ${mixins.diamond("8px")};
    }
  }
`

export const StyledLink = styled(Link).attrs(props => ({
  activeClassName: "active-link",
}))`
  ${mixins.link};
  color: ${palette.gray};
`

const LeftSideBar = () => (
  <aside>
    <Navigation>
      <StyledLink to="/">Profile</StyledLink>
      <StyledLink to="/projects">Projects</StyledLink>
    </Navigation>
  </aside>
)

export default LeftSideBar
