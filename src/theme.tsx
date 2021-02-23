import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
  Roboto: `'Roboto'`,
  Roboto300: `'Roboto300'`,
  Roboto500: `'Roboto500'`,
};

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  textStyles: {
    hero: {},
    cardTitle: {
      fontFamily: "Roboto",
      fontSize: "1.125rem",
      lineHeight: "1.33",
    },
    cardSubTitle: {
      fontFamily: "Roboto",
      fontSize: "2.25rem",
      lineHeight: "1.22",
    },
    cardTextHighlighted: {
      fontFamily: "Roboto",
      fontSize: "1.5rem",
      lineHeight: "1.33",
    },
    cardText: {
      fontFamily: "Roboto",
      fontSize: "1rem",
      lineHeight: "1.38",
    },
    callToAction: {
      fontFamily: "Roboto",
      fontSize: "1.125rem",
      lineHeight: "1.33",
    },
    testimonials: {
      fontFamily: "Roboto",
      fontSize: "0.875rem",
      lineHeight: "1.43",
      color: "darkGray",
    },
  },
  styles: {
    global: {
      "html, body": {
        // fontSize: "sm",
        fontFamily: "Roboto",
        bgColor: "nero",
        color: "gray.600",
        lineHeight: "tall",
      },
      a: {
        color: "teal.500",
      },
    },
  },
  colors: {
    nero: "#141414",
    darkGray: "#b1b1b1",
    dark: {
      50: "#0000ff",
      100: "#0000ff",
      200: "#242424", // normal
      300: "#8E5CFF", // hover
      400: "#00ff00", // pressed
      500: "#242424", // no javascript - normal
      600: "#ff0000", // no javascript - hover
      700: "#00ff00", // no javascript - press
      800: "#0000ff",
      900: "#0000ff",
    },
    brand: {
      50: "#0000ff",
      100: "#0000ff",
      200: "#7547DC", // normal
      300: "#8E5CFF", // hover
      400: "#8E5CFF", // pressed
      500: "#7547DC", // no javascript - normal
      600: "#8E5CFF", // no javascript - hover
      700: "#8E5CFF", // no javascript - press
      800: "#0000ff",
      900: "#0000ff",
    },
  },
  fonts,
  breakpoints,
});

export default theme;
