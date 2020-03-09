import React, { useState } from "react"
import styled from "styled-components"
import { Bars as MenuIcon } from "styled-icons/fa-solid/Bars"

import GlobalStyle from "../styles/GlobalStyle"
import Head from "./Head"
import Header from "./Header"
import LeftSideBar from "./LeftSideBar"
import RightSideBar from "./RightSideBar"
import { theme, mixins, media, remcalc } from "../styles"

const { space, palette } = theme

const Root = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: minmax(100px, auto) 1fr minmax(100px, auto);
  grid-template-areas: "left-sidebar content right-sidebar";
  ${media.phablet`
    grid-template-rows: 50px auto;
    grid-template-areas:
    "sidebar-menu sidebar-menu sidebar-menu"
    "content content content";
  `}

  .sidebar-menu-toggle {
    > svg {
      transform: rotate(90deg);
    }

    ~ aside {
      visibility: visible;
    }
  }

  #sidebar-menu-toggler-button {
    display: none;
    grid-area: sidebar-menu;
    ${mixins.iconButton};
    &:hover,
    &:focus,
    &:active {
      background-color: transparent;
    }

    > svg {
      transition: ${theme.transition};
    }

    ${media.phablet`
      display: inline-block;
      position:relative;
      z-index:1;
    `};
  }

  > main {
    grid-area: content;
    > header {
      ${mixins.flexColCenter};
      margin-bottom: ${remcalc("100px")};
    }

    padding: ${space.small} ${space.xxxLarge};
  }

  > aside {
    position: fixed;
    height: 100%;
    ${mixins.flexColCenter};
    padding: ${space.large} ${space.xLarge};

    ${media.phablet`
      visibility: hidden;
      width: 50%;
      padding-top: 50px;

      background-color: ${palette.black};
    `};
  }

  > aside:nth-of-type(1) {
    grid-area: left-sidebar;
    align-items: flex-start;
  }

  > aside:nth-of-type(2) {
    grid-area: right-sidebar;
    top: 0;
    right: 0;
    align-items: flex-end;
    justify-content: space-between;
  }
`

const Layout = ({ children }) => {
  const [menuToggled, setMenuToggled] = useState(false)
  const toggleMenu = event => {
    setMenuToggled(!menuToggled)
    document.getElementById("sidebar-menu-toggler-button").classList.toggle("sidebar-menu-toggle")
  }

  return (
    <Root id="root">
      <Head />
      <GlobalStyle />
      <button id="sidebar-menu-toggler-button" type="button" onClick={toggleMenu}>
        <MenuIcon size={10} />
      </button>
      <LeftSideBar />
      <RightSideBar />
      <main>
        <Header />
        {children}
      </main>
    </Root>
  )
}

export default Layout
