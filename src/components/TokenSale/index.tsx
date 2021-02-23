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

function TokenSale() {
  return (
    <SimpleGrid
      // backgroundImage="url('tokensale.png')"
      columns={2}
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
          <Text fontSize="1xl" color="white">
            Public Token Sale
          </Text>
        </HStack>
        <Text fontSize="1xl" color="#f34a34" marginTop="110px">
          Starts: March 1st, 2021
        </Text>
        <Text fontSize="4xl" color="#f5be23" marginTop="5">
          Join the ALN
        </Text>
        <Text fontSize="4xl" color="white">
          Public Token Sale
        </Text>
        <Text color="darkGray" fontSize="14px">
          Use the Aluna Social Token (ALN) to earn incentives, spend against
          monthly subscription fees, play prediction games, stake, farm, govern
          and much more (all coming soon).
        </Text>
        <Button
          marginTop="7"
          colorScheme="brand"
          color="white"
          marginRight="2"
          height="3rem"
          width="20rem"
          fontSize="xl"
        >
          Join the Sale
        </Button>
      </Box>
      <Box padding="10" backgroundColor="#1f183b" borderRadius="2xl">
        <HStack>
          <Icon as={Partnerships} />
          <Text fontSize="1xl" color="white">
            Partnerships
          </Text>
        </HStack>
        <Text fontSize="4xl" color="#f5be23" marginTop="4">
          Trusted partners{" "}
          <span style={{ color: "white" }}>to rely on the future.</span>
        </Text>
        <Text fontSize="1xl" color="white">
          See Investment opportunities.
        </Text>
        <Text fontSize="14px" color="darkGray" marginTop="140px">
          Aluna Partners and Investors
        </Text>
        <HStack spacing="5" marginTop="4">
          <P100x />
          <Pgbv />
          <Pdxdao />
        </HStack>
        <HStack></HStack>
      </Box>
    </SimpleGrid>
  );
}

export default TokenSale;
