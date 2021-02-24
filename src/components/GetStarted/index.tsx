import { Box, Button, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function GetStarted() {
  return (
    <Box
      // backgroundImage="url('calltoaction.png')"
      minHeight="566px"
      width="100%"
      align="center"
      padding="3"
    >
      <VStack>
        <Text fontSize="5rem" color="white" fontFamily="Roboto300">
          Get started.
        </Text>
        <Text
          fontSize="1.5rem"
          color="#f5be23"
          fontFamily="Roboto"
          marginTop="20"
        >
          Create a free account
          <span style={{ color: "white" }}>
            {" "}
            and connect
            <br />
            your first exchange.
          </span>
        </Text>
        <Button
          marginTop="1.5rem !important"
          colorScheme="brand"
          color="white"
          marginRight="2"
          height="3rem"
          width="20rem"
          textStyle="callToAction"
        >
          <Link href="https://aluna.social/signin">Create an account</Link>
        </Button>
      </VStack>
    </Box>
  );
}

export default GetStarted;
