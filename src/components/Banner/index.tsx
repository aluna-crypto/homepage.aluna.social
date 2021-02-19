import { Box, Text, Button, VStack, Center } from "@chakra-ui/react";
import React from "react";
import {} from "@chakra-ui/react";

interface BannerInterface {}
function Banner({}: BannerInterface) {
  return (
    <Box w="100%" marginTop="48">
      <VStack spacing={6} align="stretch" color="white" textAlign="center">
        <Text fontSize="6xl">
          The social trading
          <br /> terminal we deserve.
        </Text>
        <Text fontSize="4xl">
          Learn, copy and earn with the best crypto traders in the world.
        </Text>
        <VStack spacing={1} align="stretch">
          <Center>
            <Button
              colorScheme="brand"
              color="white"
              marginRight="2"
              height="3rem"
              width="10rem"
              fontSize="xl"
            >
              Sign Up
            </Button>
            <Button
              colorScheme="dark"
              color="white"
              marginRight="2"
              height="3rem"
              width="10rem"
              fontSize="xl"
            >
              See the platform
            </Button>
          </Center>
          <Center>
            <Text fontSize="1xl" color="darkGray" marginTop="6">
              Creating an account is FREE
            </Text>
          </Center>
        </VStack>
      </VStack>
    </Box>
  );
}

export default Banner;
