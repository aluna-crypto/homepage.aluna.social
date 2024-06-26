import { Box, Button, Center, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface BannerInterface {}
function Banner({}: BannerInterface) {
  let isUserLoggedIn = false;
  if (typeof window !== "undefined") {
    isUserLoggedIn = !!localStorage.getItem("Meteor.userId");
  }
  return (
    <Box w="100%" marginTop="190px">
      <VStack spacing={6} align="stretch" color="white" textAlign="center">
        <Text
          fontSize="3.75rem"
          lineHeight="72px"
          fontFamily="Roboto300"
          as="h1"
        >
          The social trading
          <br /> terminal we deserve.
        </Text>
        <Text as="h2" fontSize="1.5rem">
          Learn, copy and earn with the best crypto traders in the world.
        </Text>
        <VStack spacing={1} align="stretch" paddingTop="10">
          <Center>
            <Link href={`/${isUserLoggedIn ? `insights` : `signup`}`} passHref>
              <Button
                colorScheme="brand"
                as="a"
                marginRight="2"
                height="50px"
                width="163px"
                textStyle="callToAction"
                color="white"
              >
                {isUserLoggedIn ? `My account` : `Sign Up`}
              </Button>
            </Link>
            <Link href="/insights" passHref>
              <Button
                colorScheme="dark"
                as="a"
                marginRight="2"
                height="50px"
                width="163px"
                textStyle="callToAction"
                color="white"
              >
                See the platform
              </Button>
            </Link>
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
