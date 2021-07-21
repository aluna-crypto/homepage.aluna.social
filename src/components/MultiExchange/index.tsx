import { HStack, Icon, Spacer, Text, VStack, Link } from "@chakra-ui/react";
import React from "react";
import Binance from "../atoms/icons/Binance/index";
import Bitfinex from "../atoms/icons/Bitfinex";
import Bitmex from "../atoms/icons/Bitmex";
import Bittrex from "../atoms/icons/Bittrex";
import ConnectedExchange from "../atoms/icons/chain/Index";
import Gateio from "../atoms/icons/Gateio";
import Poloniex from "../atoms/icons/Poloniex";
import Valr from "../atoms/icons/Valr";

function MultiExchange() {
  return (
    <VStack
      marginTop="100px !important"
      backgroundColor="#1d1d1c"
      backgroundImage={{
        base: "url('https://aluna-homepage.herokuapp.com/img/overview-mobile.jpg')",
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
        <Link href="https://www.bitmex.com/register/jUcp71" isExternal>
          <Bitmex />
        </Link>
        <Link
          href="https://accounts.binance.com/en/register?ref=10957615"
          isExternal
        >
          <Binance />
        </Link>
        <Link href="https://www.bitfinex.com/?refcode=OMF3ML7DXO" isExternal>
          <Bitfinex />
        </Link>
        <Link
          href="https://bittrex.com/Account/Register?referralCode=HU1-4J1-PCM"
          isExternal
        >
          <Bittrex />
        </Link>
        <Link href="https://poloniex.com/signup?c=2QK5CEF3" isExternal>
          <Poloniex />
        </Link>
        <Link href="https://www.valr.com/invite/VADG3H2H" isExternal>
          <Valr />
        </Link>
        <Link href="https://www.gate.io/?ref=3384030" isExternal>
          <Gateio />
        </Link>
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
