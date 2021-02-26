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
  return (
    <SimpleGrid
      columns={columns}
      // backgroundImage="url('leaderboard.png')"
      backgroundColor="black"
      backgroundImage="url('https://aluna-homepage.herokuapp.com/img/moon.jpg')"
      backgroundSize={{ base: "contain", sm: "cover" }}
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
          marginTop={{ base: "40px", sm: "150px" }}
        >
          Find the best traders
          <br />
          <span style={{ color: "white" }}>to follow and copy.</span>
        </Text>
        <Text textStyle="cardText" color="darkGray" marginTop="4">
          Traders’ performance is displayed on the Leaderboard for ultimate
          bragging rights. Find the best traders to follow and learn from, based
          on performance, risk, and consistency.
        </Text>
        <Img
          display={{ sm: "none" }}
          src="https://aluna-homepage.herokuapp.com/img/leaderboard.png"
          paddingTop="4"
        />
        <Button
          marginTop={{ base: 2, sm: 7 }}
          colorScheme="brand"
          color="white"
          marginRight="2"
          height="3rem"
          width={{ base: "100%", sm: "80%" }}
          textStyle="callToAction"
        >
          <Link href="https://aluna.social/leaderboard" passHref>
            See the Leaderboard
          </Link>
        </Button>
      </Box>
      <Box
        paddingLeft={{ base: 0, sm: "10" }}
        paddingTop={{ base: "10" }}
        display={{ base: "none", sm: "block" }}
      >
        <Text textStyle="cardText" color="darkGray">
          Rankings this month:
        </Text>
        <Img
          src="https://aluna-homepage.herokuapp.com/img/leaderboard.png"
          paddingTop="2"
        />
      </Box>
    </SimpleGrid>
  );
}

export default LeaderBoard;
