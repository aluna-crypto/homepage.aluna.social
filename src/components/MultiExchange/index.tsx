import { HStack, Icon, Spacer, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Binance from "../atoms/icons/Binance/index";
import Bitfinex from "../atoms/icons/Bitfinex";
import Bitmex from "../atoms/icons/Bitmex";
import Bittrex from "../atoms/icons/Bittrex";
import ConnectedExchange from "../atoms/icons/chain/Index";
import Poloniex from "../atoms/icons/Poloniex";

function MultiExchange() {
  return (
    <VStack
      backgroundImage="url('img/overview.jpg')"
      // backgroundImage="url('multi.png')"
      backgroundSize="cover"
      minHeight="566px"
      width="100%"
      align="left"
      padding="10"
      display="flex"
      placeItems="flex-start"
    >
      <HStack>
        <Icon as={ConnectedExchange} />
        <Text fontSize="1xl" color="white">
          Multi Exchange Terminal
        </Text>
      </HStack>

      <Text fontSize="4xl" color="#f5be23">
        Manage all your exchange <br />
        accounts
        <span style={{ color: "white" }}> from a single interface.</span>
      </Text>
      <Spacer />
      <HStack spacing="1">
        <Bitmex />
        <Binance />
        <Bitfinex />
        <Bittrex />
        <Poloniex />
      </HStack>
      <Text color="darkGray">
        View your portfolio distribution, execute
        <br />
        trades and monitor orders with ease.
      </Text>
    </VStack>
  );
}
export default MultiExchange;
