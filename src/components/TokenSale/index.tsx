import {
  Box,
  Button,
  HStack,
  Icon,
  Img,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import P100x from "../atoms/icons/P100x/Index";
import Partnerships from "../atoms/icons/Partnership/Index";
import Pdxdao from "../atoms/icons/Pdxdao/Index";
import Pgbv from "../atoms/icons/Pgbv/Index";
import Link from "next/link";
import Ppow from "../atoms/icons/Ppow/Index";

function TokenSale() {
  const columns = useBreakpointValue({ base: 1, md: 2 });

  return (
    <SimpleGrid
      // backgroundImage="url('tokensale.png')"
      columns={columns}
      minHeight="566px"
      width="100%"
      align="left"
      spacing="4"
      // padding="10"
    >
      <Box
        backgroundColor="#000000"
        backgroundImage="url('img/token-sale.jpg')"
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        padding="10"
        borderRadius="2xl"
      >
        <HStack>
          <Img w="40px" src="img/aluna-bright.png" />
          <Text textStyle="cardTitle" color="white">
            Public Token Sale
          </Text>
        </HStack>
        <Text textStyle="cardTitle" color="#f34a34" marginTop="110px">
          Starts: March 1st, 2021
        </Text>
        <Text textStyle="cardSubTitle" color="#f5be23" marginTop="5">
          Join the ALN
        </Text>
        <Text textStyle="cardSubTitle" color="white">
          Public Token Sale
        </Text>
        <Text color="darkGray" fontSize="14px" marginTop="5">
          Use the Aluna Social Token (ALN) to earn incentives, spend against
          monthly subscription fees, play prediction games, stake, farm, govern
          and much more (all coming soon).
        </Text>
        <Button
          marginTop="9"
          colorScheme="brand"
          color="white"
          marginRight="2"
          height="3rem"
          width="20rem"
          textStyle="callToAction"
        >
          Join the Sale
        </Button>
      </Box>
      <Box padding="10" backgroundColor="#1d1d1d" borderRadius="2xl">
        <HStack>
          <Icon as={Partnerships} />
          <Text textStyle="cardTitle" color="white">
            Partnerships
          </Text>
        </HStack>
        <Text textStyle="cardSubTitle" color="#f5be23" marginTop="6">
          Trusted partners
          <br />
          <span style={{ color: "white" }}>to rely on the future.</span>
        </Text>
        <Text textStyle="cardTitle" color="white" marginTop="5">
          See Investment opportunities.
        </Text>
        <Text fontSize="14px" color="darkGray" marginTop="140px">
          Aluna Partners and Investors
        </Text>
        <HStack spacing="5" marginTop="4">
          <Link href="https://www.100x.group/">
            <a target="_blank" rel="nofollow noopener noreferrer">
              <P100x />
            </a>
          </Link>
          <Link href="https://genesisblockhk.com/">
            <a target="_blank" rel="nofollow noopener noreferrer">
              <Pgbv />
            </a>
          </Link>
          <Link href="https://dxdao.eth.link/">
            <a target="_blank" rel="nofollow noopener noreferrer">
              <Pdxdao />
            </a>
          </Link>
        </HStack>
        <HStack>
          <Link href="http://proofofwork.media/">
            <a target="_blank" rel="nofollow noopener noreferrer">
              <Ppow />
            </a>
          </Link>
        </HStack>
      </Box>
    </SimpleGrid>
  );
}

export default TokenSale;
