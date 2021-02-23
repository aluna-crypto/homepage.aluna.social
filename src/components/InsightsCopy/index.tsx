import { Box, HStack, Icon, Img, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import CopyTrading from "../atoms/icons/CopyTrading/Index";
import Insights from "../atoms/icons/Insights/Index";

function InsightsCopy() {
  return (
    <SimpleGrid
      // backgroundImage="url('insightscopy.png')"
      columns={2}
      minHeight="566px"
      width="100%"
      align="left"
      spacing="4"
    >
      <Box
        backgroundImage="url('img/insights.png')"
        backgroundSize="cover"
        padding="10"
        borderRadius="2xl"
      >
        <HStack>
          <Icon as={Insights} />
          <Text fontSize="1xl" color="white">
            Insights Feed
          </Text>
        </HStack>
        <Text fontSize="4xl" color="#f5be23" marginTop="6">
          Get insights{" "}
          <span style={{ color: "white" }}>& live updates on your feed.</span>
        </Text>
      </Box>

      <Box padding="10" backgroundColor="#1f183b" borderRadius="2xl">
        <HStack>
          <Icon as={CopyTrading} />
          <Text fontSize="1xl" color="white">
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

        <Text fontSize="4xl" color="#f5be23" marginTop="10">
          New to trading?
        </Text>
        <Text fontSize="x-large" color="#f5be23">
          Copy the best traders{" "}
          <span style={{ color: "white" }}>
            from around the world or counter-copy the worst.
          </span>
        </Text>
        <Text color="darkGray" fontSize="3" paddingTop="2">
          Find the biggest risk takers, risk-averse and the most profitable
          traders to automatically copy or counter-copy.
        </Text>
      </Box>
    </SimpleGrid>
  );
}

export default InsightsCopy;
