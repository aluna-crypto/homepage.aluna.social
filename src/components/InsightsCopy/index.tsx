import {
  Box,
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
        backgroundImage="url('img/insights.png')"
        backgroundSize={"cover"}
        backgroundPosition={{ base: "center", sm: "" }}
        backgroundRepeat="no-repeat"
        padding="10"
        borderRadius="2xl"
        minH="566px"
      >
        <HStack>
          <Icon as={Insights} />
          <Text textStyle="cardTitle" color="white">
            Insights Feed
          </Text>
        </HStack>
        <Text textStyle="cardSubTitle" color="#f5be23" marginTop="6">
          Get insights{" "}
          <span style={{ color: "white" }}>& live updates on your feed.</span>
        </Text>
      </Box>

      <Box padding="10" backgroundColor="#1f183b" borderRadius="2xl">
        <HStack>
          <Icon as={CopyTrading} />
          <Text textStyle="cardTitle" color="white">
            Copy Trading
          </Text>
        </HStack>

        <Box w="100%" paddingTop="70px" paddingLeft="70px">
          <Img
            alignSelf="center"
            src="https://aluna-homepage.herokuapp.com/img/copy-counter-copy.png"
            w="222px"
          />
        </Box>

        <Text textStyle="cardSubTitle" color="#f5be23" marginTop="10">
          New to trading?
        </Text>
        <Text textStyle="cardTextHighlighted" color="#f5be23" marginTop="4">
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
