import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  colors: {
    dark: {
      50: "#f8f0f2",
      100: "#d9d9d9",
      200: "#bfbfbf",
      300: "#a6a6a6",
      400: "#8c8c8c",
      500: "#737373",
      600: "#595959",
      700: "#404040",
      800: "#262626",
      900: "#120b0d",
    },
    brand: {
      50: "#f0e8ff",
      100: "#d0bef7",
      200: "#af94ed",
      300: "#8f69e3",
      400: "#6e3eda",
      500: "#5525c1",
      600: "#421d97",
      700: "#2f136d",
      800: "#1b0b43",
      900: "#0b021c",
    },
  },
  fonts,
  breakpoints,
});

export default theme;
