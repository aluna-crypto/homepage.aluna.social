import {
  Box,
  Button,
  HStack,
  Icon,
  Img,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import P100x from "../atoms/icons/P100x/Index";
import Partnerships from "../atoms/icons/Partnership/Index";
import Pdxdao from "../atoms/icons/Pdxdao/Index";
import Pgbv from "../atoms/icons/Pgbv/Index";
import Link from "next/link";
import Ppow from "../atoms/icons/Ppow/Index";
import Pdaomaker from "../atoms/icons/Pdaomaker/Index";
import Pdexforce from "../atoms/icons/Pdexforce/Index";

function TokenSale() {
  return (
    <SimpleGrid
      // backgroundImage="url('tokensale.png')"
      columns={[1, 2]}
      minHeight="566px"
      width="100%"
      align="left"
      spacing="4"
      // padding="10"
    >
      <Box
        backgroundColor="#000000"
        backgroundImage="url('https://aluna-homepage.herokuapp.com/img/token-sale.jpg')"
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        padding="10"
        borderRadius="2xl"
      >
        <HStack>
          <Img
            w="24px"
            alt="Public Token Sale"
            src="https://aluna-homepage.herokuapp.com/img/aluna-bright.png"
          />
          <Text textStyle="cardTitle" color="white" as="h2">
            ALN
          </Text>
        </HStack>
        <Text
          textStyle="cardSubTitle"
          color="#f5be23"
          marginTop="115px"
          as="h3"
        >
          The community-run token{" "}
          <span style={{ color: "white" }}>
            powering Aluna Trading Terminal.
          </span>
        </Text>
        <Text
          color="darkGray"
          width={{ base: "80%", sm: "40%", md: "100%" }}
          fontSize="14px"
          marginTop="5"
        >
          ALN empowers traders, builds trust in the community and rewards merit.
          Buy ALN from a list of available vendors.
        </Text>
        <Link href="/insights" passHref>
          <Button
            marginTop="9"
            as="a"
            colorScheme="brand"
            color="white"
            width={{ base: "100%", sm: "40%", md: "90%" }}
            height="50px"
            textStyle="callToAction"
          >
            Learn more about ALN
          </Button>
        </Link>
      </Box>
      <Box padding="10" backgroundColor="#1d1d1d" borderRadius="2xl">
        <HStack>
          <Icon as={Partnerships} />
          <Text textStyle="cardTitle" color="white" as="h2">
            Partnerships
          </Text>
        </HStack>
        <Text textStyle="cardSubTitle" color="#f5be23" marginTop="6" as="h3">
          Trusted partners
          <br />
          <span style={{ color: "white" }}>working with us</span>
        </Text>
        <Text textStyle="cardTitle" color="white" marginTop="5">
          See Investment opportunities.
        </Text>
        <Text fontSize="14px" color="darkGray" marginTop="140px">
          Aluna Partners and Investors
        </Text>
        <HStack spacing={{ base: "2px", sm: "5" }} marginTop="4">
          <Link href="https://www.100x.group/" passHref>
            <a target="_blank" rel="nofollow noopener noreferrer">
              <P100x />
            </a>
          </Link>
          <Link href="https://gbv.capital/" passHref>
            <a target="_blank" rel="nofollow noopener noreferrer">
              <Pgbv />
            </a>
          </Link>
          <Link href="https://dxdao.eth.link/" passHref>
            <a target="_blank" rel="nofollow noopener noreferrer">
              <Pdxdao />
            </a>
          </Link>
        </HStack>
        <HStack spacing={{ base: "2px", sm: "5" }}>
          <Link href="http://proofofwork.media/" passHref>
            <a target="_blank" rel="nofollow noopener noreferrer">
              <Ppow />
            </a>
          </Link>
          <Link href="https://twitter.com/DextForce" passHref>
            <a target="_blank" rel="nofollow noopener noreferrer">
              <Pdexforce />
            </a>
          </Link>
          <Link href="https://daomaker.com/" passHref>
            <a target="_blank" rel="nofollow noopener noreferrer">
              <Pdaomaker />
            </a>
          </Link>
        </HStack>
      </Box>
    </SimpleGrid>
  );
}

export default TokenSale;
