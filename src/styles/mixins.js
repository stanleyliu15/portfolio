import { css } from "styled-components"
import { transparentize } from "polished"

import theme from "./theme"
const { palette, space, fontSizes } = theme

const mixins = {
  flexRowCenter: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
  flexColCenter: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  link: css`
    display: block;
    color: inherit;
    cursor: pointer;
    &:hover,
    &:focus,
    &:active {
      color: ${palette.blue};
    }
  `,
  inlineLink: css`
    display: inline-block;
    color: inherit;
    cursor: pointer;
    &:hover,
    &:focus,
    &:active {
      color: ${palette.blue};
    }
  `,
  button: css`
    color: ${palette.blue};
    background-color: transparent;
    border: 1px solid ${palette.blue};
    border-radius: ${theme.borderRadius};
    font-size: ${fontSizes.medium};
    padding: ${space.small} ${space.large};
    cursor: pointer;

    &:hover,
    &:focus,
    &:active {
      background-color: ${transparentize(0.7, palette.blue)};
      outline-color: ${transparentize(0.7, palette.blue)};
    }
  `,
  iconButton: css`
    color: currentColor;
    border: none;
    background-color: transparent;
    border-radius: ${theme.borderRadius};
    padding: ${space.small};
    cursor: pointer;

    &:hover,
    &:focus,
    &:active {
      opacity: 0.8;
      background-color: ${palette.gray};
      outline-color: ${palette.gray};
    }
  `,
  diamond: size => css`
    width: ${size};
    height: ${size};
    transform: rotate(45deg) translate(-50%, -50%);
    transform-origin: 0% 0%;
  `,
}

export default mixins
