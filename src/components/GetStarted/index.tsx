import { Box, Button, Text, VStack } from "@chakra-ui/react";
import React from "react";

function GetStarted() {
  return (
    <Box
      // backgroundImage="url('calltoaction.png')"
      minHeight="566px"
      width="100%"
      align="center"
      padding="10"
    >
      <VStack padding="40">
        <Text fontSize="5rem" color="white" alignItems="">
          Get started.
        </Text>
        <Text fontSize="1.5rem" color="#f5be23" marginTop="20">
          Create a free account
          <span style={{ color: "white" }}>
            {" "}
            and connect
            <br />
            your first exchange.
          </span>
        </Text>
        <Button
          colorScheme="brand"
          color="white"
          marginRight="2"
          height="3rem"
          width="20rem"
          fontSize="xl"
        >
          Create an account
        </Button>
      </VStack>
    </Box>
  );
}

export default GetStarted;
