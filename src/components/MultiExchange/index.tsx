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
      marginTop="6.5rem !important"
      backgroundImage="url('https://aluna-homepage.herokuapp.com/img/img/overview.jpg')"
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
        <Text textStyle="cardTitle" color="white">
          Multi Exchange Terminal
        </Text>
      </HStack>

      <Text
        textStyle="cardSubTitle"
        color="#f5be23"
        marginTop="1.625rem !important"
      >
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
      <Text color="darkGray" textStyle="cardText">
        View your portfolio distribution, execute
        <br />
        trades and monitor orders with ease.
      </Text>
    </VStack>
  );
}
export default MultiExchange;
