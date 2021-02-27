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
  // Spacer,
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
import AlunaToken from "../components/atoms/icons/AlunaToken/Index";
import AlunaLogo from "../components/atoms/icons/AlunaLogo/Index";

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
        height="50px"
        // height="12"
        // padding="5"
        paddingTop="10px"
        paddingLeft="20px"
        paddingRight="10px"
        justifyContent="space-between"
        zIndex="sticky"
        bgGradient="linear(to-b, rgba(20,20,20,0.8), rgba(20,20,20,0))"
      >
        <Flex justifyContent="space-between" alignItems="self-start">
          <Box>
            <Link href="https://aluna.social">
              <a>
                <HStack spacing="4">
                  <Aluna />
                  <Box display={{ base: "none", sm: "block" }}>
                    <AlunaLogo />
                  </Box>
                </HStack>
              </a>
            </Link>
          </Box>
          <Box
            display={{ base: "none", sm: "block" }}
            paddingTop="1"
            marginLeft="35px"
          >
            <Link href="https://aluna.social/insights" passHref>
              <a>Trade on Aluna</a>
            </Link>
          </Box>
          <Box
            display={{ base: "none", sm: "block" }}
            paddingTop="1"
            marginLeft="29px"
          >
            <Link href="https://aluna.social/token" passHref>
              <a>Aluna Token</a>
            </Link>
          </Box>
        </Flex>
        <Flex>
          <Box paddingTop="1">
            <Link href="https://aluna.social/login" passHref>
              <a>Sign In</a>
            </Link>
          </Box>
          <Box
            paddingTop="1"
            marginLeft="20px"
            marginRight="15px"
            color="brandColor"
          >
            <Link href="https://aluna.social/signup" passHref>
              <a>
                <Text color="headerLinkColor">Create Account</Text>
              </a>
            </Link>
          </Box>
          <Button padding="0" onClick={onOpen} colorScheme="burger">
            <Icon
              as={HamburgerIcon}
              color="white"
              marginTop="-4px"
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
          {/* <DrawerHeader>Create your account</DrawerHeader> */}
          <DrawerBody>
            <VStack alignItems="self-start" spacing="4">
              <Box w="100%" marginTop="20">
                <Text textStyle="cardText" marginBottom="2">
                  Further reading
                </Text>
                <Link href="https://aluna.social/platform-overview">
                  <a>
                    <HStack
                      textStyle="callToAction"
                      color="darkGray"
                      spacing="3"
                    >
                      <Aluna />
                      <span>Aluna Platform Overview</span>
                    </HStack>
                  </a>
                </Link>
              </Box>
              <Box w="100%">
                <Link href="https://aluna.social/token">
                  <a>
                    <HStack
                      textStyle="callToAction"
                      color="darkGray"
                      spacing="3"
                    >
                      <AlunaToken />
                      <span>Aluna Token</span>
                    </HStack>
                  </a>
                </Link>
              </Box>
              <Box w="100%">
                <Link href="https://medium.com/@aluna">
                  <a target="_blank" rel="nofollow noopener noreferrer">
                    <HStack
                      textStyle="callToAction"
                      color="darkGray"
                      spacing="3"
                    >
                      <Medium />
                      <span>Medium Articles</span>
                    </HStack>
                  </a>
                </Link>
              </Box>
              <Box w="100%" marginTop="60px !important">
                <Text textStyle="cardText">Try the Aluna Platform</Text>
                <Link href="https://aluna.social/insights">
                  <Button
                    marginTop="2"
                    colorScheme="brand"
                    width="100%"
                    textStyle="callToAction"
                    color="white"
                  >
                    Go to Aluna
                  </Button>
                </Link>
              </Box>
              <Box marginTop="60px !important">
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
            <VStack alignItems="flex-start">
              <Link href="https://aluna.social/contact" passHref>
                <Text>Contact Us</Text>
              </Link>
              <HStack>
                <Link href="https://aluna.social/privacy-policy" passHref>
                  <a>
                    <Text textStyle="testimonials">Privacy •</Text>
                  </a>
                </Link>
                <Link href="https://aluna.social/terms-and-conditions">
                  <a>
                    <Text textStyle="testimonials">Terms & Conditions •</Text>
                  </a>
                </Link>
                <Link href="https://aluna.social/about-us">
                  <a>
                    <Text textStyle="testimonials">• About us</Text>
                  </a>
                </Link>
              </HStack>
            </VStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Container
        paddingTop="12"
        bgColor="transparent"
        backgroundImage="url('https://aluna-homepage.herokuapp.com/img/hero.jpg')"
        backgroundRepeat="no-repeat"
        // alignItems="baseline"
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
