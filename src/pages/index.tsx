import {
  //Link as ChakraLink,
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
  HStack,
} from "@chakra-ui/react";
import React from "react";
import Banner from "../components/Banner";
import Link from "next/link";

import { Container } from "../components/Container";
import Footer from "../components/Footer";
import MultiExchange from "../components/MultiExchange";
import { HamburgerIcon } from "@chakra-ui/icons";
import PublicProfile from "../components/PublicProfile/index";
import InsightsCopy from "../components/InsightsCopy";
import LeaderBoard from "../components/Leaderboard";
import TokenSale from "../components/TokenSale";
import OpinionsReviews from "../components/OpinionsReviews";
import GetStarted from "../components/GetStarted/index";
import Aluna from "../components/atoms/icons/Aluna/Index";

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
        // height="12"
        padding="5"
        justifyContent="space-between"
        zIndex="sticky"
      >
        <Flex>
          <Link href="https://aluna.social">
            <a>
              <HStack>
                <Aluna />
                Aluna
              </HStack>
            </a>
          </Link>
          <Link href="https://aluna.social/insights">
            <a>Trade on Aluna</a>
          </Link>
          <Link href="https://aluna.social/token">
            <a>Aluna Token</a>
          </Link>
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
        paddingTop="12"
        bgColor="transparent"
        backgroundImage="url('img/hero.jpg')"
        backgroundRepeat="no-repeat"
      >
        <VStack spacing={6} maxWidth="900px">
          <Banner />
          <MultiExchange />
          <PublicProfile />
          <InsightsCopy />
          <LeaderBoard />
          <TokenSale />
          <OpinionsReviews />
          <GetStarted />
        </VStack>
        <Footer />
      </Container>
    </>
  );
};

export default Index;
