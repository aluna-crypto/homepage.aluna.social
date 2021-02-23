import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { Roboto: `'Roboto', monospace` };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        // fontSize: "sm",
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
      300: "#ccff00", // hover
      400: "#00ff00", // pressed
      500: "#0000ff",
      600: "#0000ff",
      700: "#0000ff",
      800: "#0000ff",
      900: "#0000ff",
    },
    brand: {
      50: "#0000ff",
      100: "#0000ff",
      200: "#7547dc", // normal
      300: "#ccff00", // hover
      400: "#00ff00", // pressed
      500: "#0000ff",
      600: "#0000ff",
      700: "#0000ff",
      800: "#0000ff",
      900: "#0000ff",
    },
  },
  fonts,
  breakpoints,
});

export default theme;
