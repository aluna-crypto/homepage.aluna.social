import { Box, HStack, Icon, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Aluna from "../atoms/icons/Aluna/Index";
import Discord from "../atoms/icons/Discord/Index";
import Medium from "../atoms/icons/Medium/Index";
import Telegram from "../atoms/icons/Telegram/Index";
import Twitter from "../atoms/icons/Twitter/Index";
import Youtube from "../atoms/icons/Youtube/Index";
import Subscribe from "./subscribe";

function Footer() {
  return (
    <Box
      // backgroundImage="url('footer.png')"
      minHeight="408px"
      width="100%"
      align="center"
      marginTop="48"
      borderTop="1px solid #2b2b2b"
    >
      <Box minHeight="408px" maxW="900px" align="left" padding="10">
        <VStack align="left">
          <HStack>
            <Icon as={Aluna} />
            <Text fontSize="4xl" color="white">
              Aluna.Social
            </Text>
          </HStack>
          <Link href="/insights">
            <a target="_blank">
              <Text
                textStyle="cardText"
                decoration="underline"
                color="darkGray"
                marginTop="3.5"
              >
                Try the platform
              </Text>
            </a>
          </Link>
          <VStack
            maxW="320px"
            alignItems="self-start"
            marginTop="50px !important"
            display={{ sm: "none" }}
          >
            <Text textStyle="cardText" color="darkGray">
              GET UPDATES
            </Text>
            <Subscribe />
          </VStack>
        </VStack>

        <SimpleGrid columns={2} templateColumns="1fr 3fr " marginTop="10">
          <VStack w="240px" align="left">
            <Text textStyle="testimonials" color="darkGray">
              JOIN & FOLLOW
            </Text>
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
            <Text fontSize="0.8rem" color="darkGray" paddingTop="40px">
              © Aluna.Social 2021
            </Text>
          </VStack>
          <VStack
            display={{ base: "none", sm: "block" }}
            maxW="320px"
            alignItems="self-start"
          >
            <Text textStyle="cardText" color="darkGray">
              GET UPDATES
            </Text>
            <Subscribe />
          </VStack>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Footer;
