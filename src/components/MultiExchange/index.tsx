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
      marginTop="100px !important"
      backgroundColor="#1d1d1c"
      backgroundImage={{
        base:
          "url('https://aluna-homepage.herokuapp.com/img/overview-mobile.jpg')",
        sm: "url('https://aluna-homepage.herokuapp.com/img/overview.jpg')",
      }}
      // backgroundImage="url('multi.png')"
      backgroundSize="contain"
      // backgroundPosition="right"
      backgroundPosition={{ base: "0 60%", sm: "right" }}
      backgroundRepeat="no-repeat"
      minHeight={{ base: "760px", sm: "566px" }}
      borderRadius="2xl"
      width="100%"
      align="left"
      padding="10"
      display="flex"
      placeItems="flex-start"
    >
      <HStack>
        <Icon as={ConnectedExchange} />
        <Text textStyle="cardTitle" color="white" as="h2">
          Multi Exchange Terminal
        </Text>
      </HStack>

      <Text
        textStyle="cardSubTitle"
        color="#f5be23"
        marginTop="26px !important"
        width={{ base: "90%", sm: "60%" }}
        as="h3"
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
