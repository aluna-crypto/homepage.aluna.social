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
      backgroundColor="#1d1d1c"
      backgroundImage={{
        base: "url('https://aluna-homepage.herokuapp.com/img/overview.jpg')",
        sm:
          "url('https://aluna-homepage.herokuapp.com/img/overview-mobile.jpg')",
      }}
      // backgroundImage="url('multi.png')"
      backgroundSize="contain"
      backgroundPosition="right"
      // backgroundRepeat="repeat-y"
      backgroundRepeat="no-repeat"
      minHeight="566px"
      borderRadius="2xl"
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
        width={{ base: "90%", sm: "60%" }}
      >
        Manage all your exchange accounts
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
