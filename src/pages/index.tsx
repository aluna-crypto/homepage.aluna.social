import {
  //Link as ChakraLink,
  Text,
  Grid,
  VStack,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import Banner from "../components/Banner";
import Button from "../components/Button";
import Link from "next/link";

import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import MultiExchange from "../components/MultiExchange";

const Index = () => (
  <>
    <Flex
      width="100%"
      position="fixed"
      top="0"
      height="12"
      bgColor="nero"
      justifyContent="space-between"
      zIndex="sticky"
    >
      <Flex>
        <Link href="https://aluna.social">Aluna</Link>
        <Link href="https://aluna.social/insights">Trade on Aluna</Link>
        <Link href="https://aluna.social/token">Aluna Token</Link>
      </Flex>
      <Flex>
        <Link href="https://aluna.social/signin">Sign In</Link>
        <Link href="https://aluna.social/signup">Create Account</Link>
      </Flex>
    </Flex>

    <Container
      marginTop="12"
      bgColor="transparent"
      backgroundImage="url('hero.jpg')"
      backgroundRepeat="no-repeat"
      backgroundPosition="0 -300px"
    >
      <VStack spacing={6} maxWidth="900px">
        <Banner />
        <MultiExchange />
      </VStack>

      <h1>aluna static homepage</h1>
      <Button>Login</Button>

      <Footer>
        <Text>Next ❤️ Chakra</Text>
      </Footer>
    </Container>
  </>
);

export default Index;
