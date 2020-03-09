// Generate font-faces: https://transfonter.org/

import { css } from "styled-components"

import BrandonGrotesqueThinWOFF2 from "../fonts/BrandonGrotesque/BrandonGrotesque-Thin.woff2"
import BrandonGrotesqueThinWOFF from "../fonts/BrandonGrotesque/BrandonGrotesque-Thin.woff"
import BrandonGrotesqueThinTTF from "../fonts/BrandonGrotesque/BrandonGrotesque-Thin.ttf"

import BrandonGrotesqueLightWOFF2 from "../fonts/BrandonGrotesque/BrandonGrotesque-Light.woff2"
import BrandonGrotesqueLightWOFF from "../fonts/BrandonGrotesque/BrandonGrotesque-Light.woff"
import BrandonGrotesqueLightTTF from "../fonts/BrandonGrotesque/BrandonGrotesque-Light.ttf"

import BrandonGrotesqueRegularWOFF2 from "../fonts/BrandonGrotesque/BrandonGrotesque-Regular.woff2"
import BrandonGrotesqueRegularWOFF from "../fonts/BrandonGrotesque/BrandonGrotesque-Regular.woff"
import BrandonGrotesqueRegularTTF from "../fonts/BrandonGrotesque/BrandonGrotesque-Regular.ttf"

import BrandonGrotesqueSemiBoldWOFF2 from "../fonts/BrandonGrotesque/BrandonGrotesque-SemiBold.woff2"
import BrandonGrotesqueSemiBoldWOFF from "../fonts/BrandonGrotesque/BrandonGrotesque-SemiBold.woff"
import BrandonGrotesqueSemiBoldTTF from "../fonts/BrandonGrotesque/BrandonGrotesque-SemiBold.ttf"

import BrandonGrotesqueBoldWOFF2 from "../fonts/BrandonGrotesque/BrandonGrotesque-Bold.woff2"
import BrandonGrotesqueBoldWOFF from "../fonts/BrandonGrotesque/BrandonGrotesque-Bold.woff"
import BrandonGrotesqueBoldTTF from "../fonts/BrandonGrotesque/BrandonGrotesque-Bold.ttf"

import BrandonGrotesqueExtraBoldWOFF2 from "../fonts/BrandonGrotesque/BrandonGrotesque-ExtraBold.woff2"
import BrandonGrotesqueExtraBoldWOFF from "../fonts/BrandonGrotesque/BrandonGrotesque-ExtraBold.woff"
import BrandonGrotesqueExtraBoldTTF from "../fonts/BrandonGrotesque/BrandonGrotesque-ExtraBold.ttf"

import BrandonGrotesqueThinItalicWOFF2 from "../fonts/BrandonGrotesque/BrandonGrotesque-ThinItalic.woff2"
import BrandonGrotesqueThinItalicWOFF from "../fonts/BrandonGrotesque/BrandonGrotesque-ThinItalic.woff"
import BrandonGrotesqueThinItalicTTF from "../fonts/BrandonGrotesque/BrandonGrotesque-ThinItalic.ttf"

import BrandonGrotesqueLightItalicWOFF2 from "../fonts/BrandonGrotesque/BrandonGrotesque-LightItalic.woff2"
import BrandonGrotesqueLightItalicWOFF from "../fonts/BrandonGrotesque/BrandonGrotesque-LightItalic.woff"
import BrandonGrotesqueLightItalicTTF from "../fonts/BrandonGrotesque/BrandonGrotesque-LightItalic.ttf"

import BrandonGrotesqueRegularItalicWOFF2 from "../fonts/BrandonGrotesque/BrandonGrotesque-RegularItalic.woff2"
import BrandonGrotesqueRegularItalicWOFF from "../fonts/BrandonGrotesque/BrandonGrotesque-RegularItalic.woff"
import BrandonGrotesqueRegularItalicTTF from "../fonts/BrandonGrotesque/BrandonGrotesque-RegularItalic.ttf"

import BrandonGrotesqueSemiBoldItalicWOFF2 from "../fonts/BrandonGrotesque/BrandonGrotesque-SemiBoldItalic.woff2"
import BrandonGrotesqueSemiBoldItalicWOFF from "../fonts/BrandonGrotesque/BrandonGrotesque-SemiBoldItalic.woff"
import BrandonGrotesqueSemiBoldItalicTTF from "../fonts/BrandonGrotesque/BrandonGrotesque-SemiBoldItalic.ttf"

import BrandonGrotesqueBoldItalicWOFF2 from "../fonts/BrandonGrotesque/BrandonGrotesque-BoldItalic.woff2"
import BrandonGrotesqueBoldItalicWOFF from "../fonts/BrandonGrotesque/BrandonGrotesque-BoldItalic.woff"
import BrandonGrotesqueBoldItalicTTF from "../fonts/BrandonGrotesque/BrandonGrotesque-BoldItalic.ttf"

import BrandonGrotesqueExtraBoldItalicWOFF2 from "../fonts/BrandonGrotesque/BrandonGrotesque-ExtraBoldItalic.woff2"
import BrandonGrotesqueExtraBoldItalicWOFF from "../fonts/BrandonGrotesque/BrandonGrotesque-ExtraBoldItalic.woff"
import BrandonGrotesqueExtraBoldItalicTTF from "../fonts/BrandonGrotesque/BrandonGrotesque-ExtraBoldItalic.ttf"

import theme from "./theme"
const { fontWeights } = theme

const fontFaces = css`
  @font-face {
    font-family: "Brandon Grotesque";
    src: url(${BrandonGrotesqueThinWOFF2}) format("woff2"),
      url(${BrandonGrotesqueThinWOFF}) format("woff"),
      url(${BrandonGrotesqueThinTTF}) format("truetype");
    font-style: normal;
    font-weight: ${fontWeights.thin};
  }

  @font-face {
    font-family: "Brandon Grotesque";
    src: url(${BrandonGrotesqueLightWOFF2}) format("woff2"),
      url(${BrandonGrotesqueLightWOFF}) format("woff"),
      url(${BrandonGrotesqueLightTTF}) format("truetype");
    font-style: normal;
    font-weight: ${fontWeights.light};
  }

  @font-face {
    font-family: "Brandon Grotesque";
    src: url(${BrandonGrotesqueRegularWOFF2}) format("woff2"),
      url(${BrandonGrotesqueRegularWOFF}) format("woff"),
      url(${BrandonGrotesqueRegularTTF}) format("truetype");
    font-style: normal;
    font-weight: ${fontWeights.regular};
  }

  @font-face {
    font-family: "Brandon Grotesque";
    src: url(${BrandonGrotesqueSemiBoldWOFF2}) format("woff2"),
      url(${BrandonGrotesqueSemiBoldWOFF}) format("woff"),
      url(${BrandonGrotesqueSemiBoldTTF}) format("truetype");
    font-style: normal;
    font-weight: ${fontWeights.semiBold};
  }

  @font-face {
    font-family: "Brandon Grotesque";
    src: url(${BrandonGrotesqueBoldWOFF2}) format("woff2"),
      url(${BrandonGrotesqueBoldWOFF}) format("woff"),
      url(${BrandonGrotesqueBoldTTF}) format("truetype");
    font-style: normal;
    font-weight: ${fontWeights.bold};
  }

  @font-face {
    font-family: "Brandon Grotesque";
    src: url(${BrandonGrotesqueExtraBoldWOFF2}) format("woff2"),
      url(${BrandonGrotesqueExtraBoldWOFF}) format("woff"),
      url(${BrandonGrotesqueExtraBoldTTF}) format("truetype");
    font-style: normal;
    font-weight: ${fontWeights.extraBold};
  }

  @font-face {
    font-family: "Brandon Grotesque";
    src: url(${BrandonGrotesqueThinItalicWOFF2}) format("woff2"),
      url(${BrandonGrotesqueThinItalicWOFF}) format("woff"),
      url(${BrandonGrotesqueThinItalicTTF}) format("truetype");
    font-style: italic;
    font-weight: ${fontWeights.thin};
  }

  @font-face {
    font-family: "Brandon Grotesque";
    src: url(${BrandonGrotesqueLightItalicWOFF2}) format("woff2"),
      url(${BrandonGrotesqueLightItalicWOFF}) format("woff"),
      url(${BrandonGrotesqueLightItalicTTF}) format("truetype");
    font-style: italic;
    font-weight: ${fontWeights.light};
  }

  @font-face {
    font-family: "Brandon Grotesque";
    src: url(${BrandonGrotesqueRegularItalicWOFF2}) format("woff2"),
      url(${BrandonGrotesqueRegularItalicWOFF}) format("woff"),
      url(${BrandonGrotesqueRegularItalicTTF}) format("truetype");
    font-style: italic;
    font-weight: ${fontWeights.regular};
  }

  @font-face {
    font-family: "Brandon Grotesque";
    src: url(${BrandonGrotesqueSemiBoldItalicWOFF2}) format("woff2"),
      url(${BrandonGrotesqueSemiBoldItalicWOFF}) format("woff"),
      url(${BrandonGrotesqueSemiBoldItalicTTF}) format("truetype");
    font-style: italic;
    font-weight: ${fontWeights.semiBold};
  }

  @font-face {
    font-family: "Brandon Grotesque";
    src: url(${BrandonGrotesqueBoldItalicWOFF2}) format("woff2"),
      url(${BrandonGrotesqueBoldItalicWOFF}) format("woff"),
      url(${BrandonGrotesqueBoldItalicTTF}) format("truetype");
    font-style: italic;
    font-weight: ${fontWeights.bold};
  }

  @font-face {
    font-family: "Brandon Grotesque";
    src: url(${BrandonGrotesqueExtraBoldItalicWOFF2}) format("woff2"),
      url(${BrandonGrotesqueExtraBoldItalicWOFF}) format("woff"),
      url(${BrandonGrotesqueExtraBoldItalicTTF}) format("truetype");
    font-style: italic;
    font-weight: ${fontWeights.extraBold};
  }
`

export default fontFaces
