import {
  Box,
  Center,
  HStack,
  Icon,
  Img,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import CopyTrading from "../atoms/icons/CopyTrading/Index";
import Insights from "../atoms/icons/Insights/Index";

function InsightsCopy() {
  const columns = useBreakpointValue({ base: 1, md: 2 });

  return (
    <SimpleGrid
      // backgroundImage="url('insightscopy.png')"
      columns={columns}
      minHeight="566px"
      width="100%"
      align="left"
      spacing="4"
    >
      <Box
        backgroundColor="#1d1d1c"
        backgroundImage="url('https://aluna-homepage.herokuapp.com/img/insights.png')"
        backgroundSize="cover"
        backgroundPosition={{ base: "bottom" }}
        backgroundRepeat="no-repeat"
        padding="10"
        borderRadius="2xl"
        // minH={{ base: "70px", sm: "566px" }}
        minH={{ base: "760px", sm: "860px", md: "556px" }}
      >
        <HStack>
          <Icon as={Insights} />
          <Text textStyle="cardTitle" color="white" as="h2">
            Insights Feed
          </Text>
        </HStack>
        <Text textStyle="cardSubTitle" color="#f5be23" as="h3" marginTop="6">
          Get insights{" "}
          <span style={{ color: "white" }}>& live updates on your feed.</span>
        </Text>
      </Box>

      <Box padding="10" backgroundColor="#1f183b" borderRadius="2xl">
        <HStack>
          <Icon as={CopyTrading} />
          <Text textStyle="cardTitle" color="white" as="h2">
            Copy Trading
          </Text>
        </HStack>

        <Center w="100%" paddingTop="70px">
          <Img
            alignSelf="center"
            alt="Copy Trading"
            src="https://aluna-homepage.herokuapp.com/img/copy-counter-copy.png"
            w="222px"
          />
        </Center>

        <Text textStyle="cardSubTitle" color="#f5be23" marginTop="10">
          New to trading?
        </Text>
        <Text
          textStyle="cardTextHighlighted"
          color="#f5be23"
          marginTop="4"
          as="h3"
        >
          Copy the best traders{" "}
          <span style={{ color: "white" }}>
            from around the world or counter-copy the worst.
          </span>
        </Text>
        <Text color="darkGray" textStyle="cardText" marginTop="6">
          Find the biggest risk takers, risk-averse and the most profitable
          traders to automatically copy or counter-copy.
        </Text>
      </Box>
    </SimpleGrid>
  );
}

export default InsightsCopy;
