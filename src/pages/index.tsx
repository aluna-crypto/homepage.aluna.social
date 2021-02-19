import {
  //Link as ChakraLink,
  Text,
  VStack,
  Button,
  Flex,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useBreakpointValue,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import Banner from "../components/Banner";
import Link from "next/link";

import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import MultiExchange from "../components/MultiExchange";
import { HamburgerIcon } from "@chakra-ui/icons";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // make it full with for narrow version of the website
  const sidebarWidth = useBreakpointValue({ base: "full", sm: "xs" });

  return (
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
          <Button onClick={onOpen}>
            <Icon as={HamburgerIcon} />
          </Button>
        </Flex>
      </Flex>

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        size={sidebarWidth}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>
          <DrawerBody>This should be the menu</DrawerBody>
          <DrawerFooter>something</DrawerFooter>
        </DrawerContent>
      </Drawer>

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
};

export default Index;
