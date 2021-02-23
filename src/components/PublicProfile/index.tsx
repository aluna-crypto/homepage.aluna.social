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
import Profile from "../atoms/icons/Profile/Index";

function PublicProfile() {
  return (
    <SimpleGrid
      columns={2}
      // backgroundImage="url('profile.png')"
      backgroundImage="url('https://aluna-homepage.herokuapp.com/img/alunaut.png')"
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
          <Icon as={Profile} />
          <Text fontSize="1xl" color="white">
            Public Profiles
          </Text>
        </HStack>
        <Text fontSize="4xl" color="#f5be23" marginTop="200px">
          Build{" "}
          <span style={{ color: "white" }}>
            the ultimate
            <br />
            trader profile.
          </span>
        </Text>
        <Text color="darkGray" fontSize="14px">
          Your Aluna Social profile is a Trust Pass! Share your profile with
          your friends to prove your trading reputation, while keeping sensitive
          information like position and portfolio size private.
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
          Create your own Aluna profile
        </Button>
      </Box>

      <Box paddingLeft="10">
        <Img
          src="https://aluna-homepage.herokuapp.com/img/profiles.png"
          maxW="360px"
        />
      </Box>
    </SimpleGrid>
  );
}

export default PublicProfile;
