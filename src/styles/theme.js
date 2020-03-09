import remcalc from "./remcalc"

const theme = {
  space: {
    xxxSmall: remcalc("2px"),
    xxSmall: remcalc("4px"),
    xSmall: remcalc("6px"),
    small: remcalc("8px"),
    medium: remcalc("12px"),
    large: remcalc("18px"),
    xLarge: remcalc("24px"),
    xxLarge: remcalc("32px"),
    xxxLarge: remcalc("40px"),
  },
  fonts: {
    BrandonGrotesque:
      "Brandon Grotesque, Times New Roman, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
  },
  fontSizes: {
    small: remcalc("12px"),
    regular: remcalc("16px"),
    medium: remcalc("20px"),
    large: remcalc("24px"),
    xLarge: remcalc("28px"),
    xxLarge: remcalc("32px"),
    xxxLarge: remcalc("36px"),
  },
  fontWeights: {
    thin: 200,
    light: 300,
    regular: 400,
    semiBold: 500,
    bold: 700,
    extraBold: 800,
  },
  lineHeights: {
    base: 1,
    small: 1.5,
    medium: 1.7,
    large: 1.9,
  },
  letterSpace: {
    small: "0.8px",
  },
  borderRadius: "4px",
  palette: {
    white: "#fff",
    black: "#000",
    gray: "#4c5772",
    lightGray: "#d3d3d3",
    red: "#f93822",
    green: "#64ffda",
    blue: "#71afff",
    yellow: "#ffc464",
    orange: "#ff9e64",
    brown: "#654321",
    pink: "#ff647f",
    navy: "#0a192f",
    bunker: "#1e2733",
    selection: "#d3d3d3",
  },
  transition: "all 0.5s cubic-bezier(0.625, 0.050, 0.360, 1)",
}

export default theme
