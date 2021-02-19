import { Box, Text, Button, VStack, Center } from "@chakra-ui/react";
import React from "react";
import {} from "@chakra-ui/react";

interface BannerInterface {}
function Banner({}: BannerInterface) {
  return (
    <Box w="100%" h="500px">
      <VStack spacing={6} align="stretch">
        <Text fontSize="6xl">The social trading terminal we deserve.</Text>
        <Text fontSize="4xl">
          Learn, copy and earn with the best crypto traders in the world.
        </Text>
        <VStack spacing={1} align="stretch">
          <Center>
            <Button colorScheme="brand">Sign Up</Button>
            <Button colorScheme="dark">See the platform</Button>
          </Center>
          <Center>
            <Text fontSize="1xl">Creating an account is FREE</Text>
          </Center>
        </VStack>
      </VStack>
    </Box>
  );
}

export default Banner;
