import { Box, Button, Center, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface BannerInterface {}
function Banner({}: BannerInterface) {
  return (
    <Box w="100%" marginTop="48">
      <VStack spacing={6} align="stretch" color="white" textAlign="center">
        <Text fontSize="3.75rem" fontFamily="Roboto300" as="h1">
          The social trading
          <br /> terminal we deserve.
        </Text>
        <Text fontSize="1.5rem">
          Learn, copy and earn with the best crypto traders in the world.
        </Text>
        <VStack spacing={1} align="stretch" paddingTop="10">
          <Center>
            <Button
              colorScheme="brand"
              marginRight="2"
              height="3rem"
              width="10rem"
              textStyle="callToAction"
              color="white"
            >
              <Link href="https://aluna.social/signup" passHref>
                Sign Up
              </Link>
            </Button>
            <Button
              colorScheme="dark"
              marginRight="2"
              height="3rem"
              width="10rem"
              textStyle="callToAction"
              color="white"
            >
              <Link href="https://aluna.social/insights" passHref>
                See the platform
              </Link>
            </Button>
          </Center>
          <Center>
            <Text fontSize="1xl" color="darkGray" marginTop="2">
              Creating an account is FREE
            </Text>
          </Center>
        </VStack>
      </VStack>
    </Box>
  );
}

export default Banner;
