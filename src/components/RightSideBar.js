import React from "react"
import styled from "styled-components"

import config from "../config"
import { mixins } from "../styles"

const StyledLink = styled.a`
  ${mixins.link};
`

const Socials = styled.div`
  text-align: end;
`

const RightSideBar = () => (
  <aside>
    {/* <StyledLink rel="noreferrer noopener" target="_blank" href="/resume.pdf">
      Resume
    </StyledLink> */}
    <Socials>
      <StyledLink
        rel="noreferrer noopener"
        target="_blank"
        href={`https://www.github.com/${config.github}`}
      >
        Github
      </StyledLink>
      <StyledLink
        rel="noreferrer noopener"
        target="_blank"
        href={`https://www.linkedin.com/in/${config.linkedin}`}
      >
        Linkedin
      </StyledLink>
      {/* <StyledLink
        rel="noreferrer noopener"
        target="_blank"
        href={`https://www.linkedin.com/in/${config.linkedin}`}
      >
        Linkedin
      </StyledLink> */}
    </Socials>
    <StyledLink rel="noreferrer noopener" target="_blank" href={`mailto:${config.email}`}>
      Contact
    </StyledLink>
  </aside>
)

export default RightSideBar
