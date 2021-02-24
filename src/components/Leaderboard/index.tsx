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
import Link from "next/link";
import React from "react";
import LeaderBoardIcon from "../atoms/icons/Leaderboard/Index";

function LeaderBoard() {
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 2 });
  const hiddeMobile = useBreakpointValue({ base: true, sm: false });
  return (
    <SimpleGrid
      columns={columns}
      // backgroundImage="url('leaderboard.png')"
      backgroundImage="url('https://aluna-homepage.herokuapp.com/img/moon.jpg')"
      backgroundSize={hiddeMobile ? "contain" : "cover"}
      backgroundRepeat="no-repeat"
      minHeight="566px"
      width="100%"
      align="left"
      padding="10"
      spacing="4"
      borderRadius="2xl"
    >
      <Box>
        <HStack>
          <Icon as={LeaderBoardIcon} />
          <Text textStyle="cardTitle" color="white">
            Leaderboard
          </Text>
        </HStack>
        <Text
          textStyle="cardSubTitle"
          color="#f5be23"
          marginTop={hiddeMobile ? "40px" : "150px"}
        >
          Find the best traders
          <br />
          <span style={{ color: "white" }}>to follow and copy.</span>
        </Text>
        <Text
          textStyle="cardText"
          color="darkGray"
          marginTop="4"
          width="22.5rem"
        >
          Traders’ performance is displayed on the Leaderboard for ultimate
          bragging rights. Find the best traders to follow and learn from, based
          on performance, risk, and consistency.
        </Text>
        <Img
          hidden={!hiddeMobile}
          src="https://aluna-homepage.herokuapp.com/img/leaderboard.png"
          w="22.5rem"
          paddingTop="4"
        />
        <Button
          marginTop={hiddeMobile ? 2 : 7}
          colorScheme="brand"
          color="white"
          marginRight="2"
          height="3rem"
          width="22.5rem"
          textStyle="callToAction"
        >
          <Link href="https://aluna.social/leaderboard" passHref>
            See the Leaderboard
          </Link>
        </Button>
      </Box>
      <Box padding="10" hidden={hiddeMobile}>
        <Text textStyle="cardText" color="darkGray">
          Rankings this month:
        </Text>
        <Img
          src="https://aluna-homepage.herokuapp.com/img/leaderboard.png"
          w="360px"
          paddingTop="2"
        />
      </Box>
    </SimpleGrid>
  );
}

export default LeaderBoard;
