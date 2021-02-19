import { Box, Text, Icon, HStack } from "@chakra-ui/react";
import React from "react";
import {} from "@chakra-ui/react";
import Bitmex from "../atoms/icons/Bitmex";
import ConnectedExchange from "../atoms/icons/chain/Index";

function MultiExchange() {
  return (
    <Box
      backgroundImage="url('multiexchange-terminal.jpg')"
      minHeight="566px"
      width="100%"
      align="left"
      padding="10"
    >
      <HStack>
        <Icon as={ConnectedExchange} />
        <Text fontSize="4xl" color="white" alignItems="">
          Multi Exchange Terminal
        </Text>
      </HStack>
      <Text fontSize="2xl" color="#f5be23" marginTop="20">
        Manage all your exchange <br />
        accounts
        <span style={{ color: "white" }}> from a single interface.</span>
      </Text>
      <HStack>
        <Bitmex />
        <Bitmex />
        <Bitmex />
        <Bitmex />
        <Bitmex />
      </HStack>
      <Text color="darkGray">
        View your portfolio distribution, execute
        <br />
        trades and monitor orders with ease.
      </Text>
    </Box>
  );
}

export default MultiExchange;
