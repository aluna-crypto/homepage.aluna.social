import { Box, Button, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function GetStarted() {
  return (
    <Box
      // backgroundImage="url('calltoaction.png')"
      // minHeight="566px"
      width="100%"
      align="center"
      marginTop="192px !important"
    >
      <VStack>
        <Text
          fontSize="2.25rem"
          lineHeight="48px"
          color="white"
          fontFamily="Roboto300"
          as="h2"
        >
          Get started.
        </Text>
        <Text
          fontSize="1.5rem"
          color="#f5be23"
          fontFamily="Roboto"
          lineHeight="30px"
          marginTop="20"
          as="h3"
        >
          Create a free account
          <span style={{ color: "white" }}>
            {" "}
            and connect
            <br />
            your first exchange.
          </span>
        </Text>
        <Link href="https://aluna.social/signup" passHref>
          <Button
            marginTop="24px !important"
            as="a"
            colorScheme="brand"
            color="white"
            height="50px"
            width="280px"
            textStyle="callToAction"
          >
            Create an account
          </Button>
        </Link>
      </VStack>
    </Box>
  );
}

export default GetStarted;
