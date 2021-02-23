import {
  Box,
  Button,
  HStack,
  Icon,
  Img,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import LeaderBoardIcon from "../atoms/icons/Leaderboard/Index";

function LeaderBoard() {
  return (
    <SimpleGrid
      columns={2}
      // backgroundImage="url('leaderboard.png')"
      backgroundImage="url('https://aluna-homepage.herokuapp.com/img/moon.jpg')"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      minHeight="566px"
      width="100%"
      align="left"
      padding="10"
      borderRadius="2xl"
    >
      <Box>
        <HStack>
          <Icon as={LeaderBoardIcon} />
          <Text fontSize="1xl" color="white">
            Leaderboard
          </Text>
        </HStack>
        <Text fontSize="4xl" color="#f5be23" marginTop="150px">
          Find the best traders
          <br />
          <span style={{ color: "white" }}>to follow and copy.</span>
        </Text>
        <Text color="darkGray">
          Traders’ performance is displayed on the Leaderboard for ultimate
          bragging rights. Find the best traders to follow and learn from, based
          on performance, risk, and consistency.
        </Text>
        <Button
          marginTop="7"
          colorScheme="brand"
          color="white"
          marginRight="2"
          height="3rem"
          width="20rem"
          fontSize="xl"
        >
          See the Leaderboard
        </Button>
      </Box>
      <Box paddingLeft="10">
        <Text color="darkGray">Rankings this month:</Text>
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
