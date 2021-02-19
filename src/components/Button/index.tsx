import React from "react";
import { Button as ButtonChakra } from "@chakra-ui/react";

interface ButtonInterface {
  children: object;
  bg: "brand" | "primary";
}
function Button({ children, bg }: ButtonInterface) {
  return <ButtonChakra colorScheme="brand">{children}</ButtonChakra>;
}
Button.defaultProps = {
  bg: "primary",
};
export default Button;
