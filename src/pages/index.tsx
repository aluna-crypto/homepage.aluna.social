import {
  //Link as ChakraLink,
  VStack,
  Button,
  Flex,
  useDisclosure,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  // DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useBreakpointValue,
  Icon,
  HStack,
  Center,
  Spacer,
  Box,
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
import Discord from "../components/atoms/icons/Discord/Index";
import Medium from "../components/atoms/icons/Medium/Index";
import Telegram from "../components/atoms/icons/Telegram/Index";
import Twitter from "../components/atoms/icons/Twitter/Index";
import Youtube from "../components/atoms/icons/Youtube/Index";

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
        <Flex alignItems="self-start">
          <Link href="https://aluna.social">
            <a>
              <HStack>
                <Aluna />
                Aluna
              </HStack>
            </a>
          </Link>
          <Center w="120px" marginLeft="4">
            <Link href="https://aluna.social/insights" passHref>
              <a>Trade on Aluna</a>
            </Link>
          </Center>
          <Center w="120px">
            <Link href="https://aluna.social/token" passHref>
              <a>Aluna Token</a>
            </Link>
          </Center>
        </Flex>
        <Flex>
          <Center w="120px">
            <Link href="https://aluna.social/signin" passHref>
              <a>Sign In</a>
            </Link>
          </Center>
          <Center w="120px" marginRight="8">
            <Link href="https://aluna.social/signup" passHref>
              <a>Create Account</a>
            </Link>
          </Center>
          <Button onClick={onOpen} colorScheme="burger">
            <Icon
              as={HamburgerIcon}
              color="white"
              backgroundColor="transparent"
              fontSize="2xl"
            />
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
        <DrawerContent backgroundColor="#1d1d1c" color="darkGray">
          <DrawerCloseButton />
          <Spacer />
          {/* <DrawerHeader>Create your account</DrawerHeader> */}
          <DrawerBody>
            <VStack alignItems="self-start" spacing="4">
              <Box w="100%">
                <Text textStyle="cardText">Try the Aluna Platform</Text>
                <Link href="https://aluna.social/insights">
                  <Button
                    marginTop="2"
                    colorScheme="brand"
                    height="3rem"
                    width="100%"
                    textStyle="callToAction"
                    color="white"
                  >
                    Go to Aluna
                  </Button>
                </Link>
              </Box>
              <Box>
                <Text textStyle="cardText">More</Text>
                <HStack>
                  <Link href="https://twitter.com/AlunaSocial">
                    <a target="_blank" rel="nofollow noopener noreferrer">
                      <Twitter />
                    </a>
                  </Link>
                  <Link href="https://medium.com/@aluna">
                    <a target="_blank" rel="nofollow noopener noreferrer">
                      <Medium />
                    </a>
                  </Link>
                  <Link href="https://t.me/alunasocial">
                    <a target="_blank" rel="nofollow noopener noreferrer">
                      <Telegram />
                    </a>
                  </Link>
                  <Link href="https://discord.gg/hsadykv">
                    <a target="_blank" rel="nofollow noopener noreferrer">
                      <Discord />
                    </a>
                  </Link>
                  <Link href="https://www.youtube.com/channel/UCYBt4Skw5m2z7CM4LdAMREw">
                    <a target="_blank" rel="nofollow noopener noreferrer">
                      <Youtube />
                    </a>
                  </Link>
                </HStack>
              </Box>
            </VStack>
          </DrawerBody>
          <DrawerFooter textAlign="left">
            <Text>Contact Us</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Container
        paddingTop="12"
        bgColor="transparent"
        backgroundImage="url('https://aluna-homepage.herokuapp.com/img/hero.jpg')"
        backgroundRepeat="no-repeat"
      >
        <VStack spacing={6} marginX="2" maxWidth="900px">
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
