import { css } from "styled-components"

const breakpoints = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phablet: 572,
  phone: 376,
}

// iterates through the sizes and creates a media template
// uses em in breakpoints to work properly cross-browser and support users
// changing their browsers font-size: https://zellwk.com/blog/media-query-units/
const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  const emSize = breakpoints[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export default media
