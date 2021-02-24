import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
  Roboto: `'Roboto'`,
  Roboto300: `'Roboto300'`,
  Roboto500: `'Roboto500'`,
};

const breakpoints = createBreakpoints({
  base: "32em",
  sm: "52em",
  md: "64em",
  lg: "80em",
  xl: "96em",
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
        textDecoration: "none",
        color: "white",
      },
    },
  },
  colors: {
    nero: "#141414",
    darkGray: "#b1b1b1",
    brandColor: "#7547DC",
    dark: {
      50: "#0000ff",
      100: "#0000ff",
      200: "#242424", // normal
      300: "#242424", // hover
      400: "#242424", // pressed
      500: "#242424", // no javascript - normal
      600: "#242424", // no javascript - hover
      700: "#242424", // no javascript - press
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
    burger: {
      50: "#0000ff",
      100: "#0000ff",
      200: "transparent", // normal
      300: "transparent", // hover
      400: "transparent", // pressed
      500: "transparent", // no javascript - normal
      600: "transparent", // no javascript - hover
      700: "transparent", // no javascript - press
      800: "#0000ff",
      900: "#0000ff",
    },
  },
  fonts,
  breakpoints,
});

export default theme;
