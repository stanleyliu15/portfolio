import styled from "styled-components"

import { theme, remcalc } from "../styles"

const { space } = theme

const Container = styled.div`
  margin: ${space.large} auto;
  max-width: ${remcalc("500px")};
`

export default Container
