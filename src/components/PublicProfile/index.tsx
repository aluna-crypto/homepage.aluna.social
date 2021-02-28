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
import Profile from "../atoms/icons/Profile/Index";

function PublicProfile() {
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 2 });
  return (
    <SimpleGrid
      columns={columns}
      // backgroundImage="url('profile.png')"
      backgroundColor="black"
      backgroundImage={{
        base:
          "url('https://aluna-homepage.herokuapp.com/img/alunaut-mobile.png')",
        sm: "url('https://aluna-homepage.herokuapp.com/img/alunaut.png')",
      }}
      backgroundSize={{ base: "contain", sm: "cover" }}
      backgroundPosition={{ base: "0 20px" }}
      backgroundRepeat="no-repeat"
      minHeight="566px"
      width="100%"
      align="left"
      borderRadius="2xl"
    >
      <Box padding="10">
        <HStack>
          <Icon as={Profile} />
          <Text textStyle="cardTitle" color="white" as="h2">
            Public Profiles
          </Text>
        </HStack>
        <Text
          textStyle="cardSubTitle"
          color="#f5be23"
          as="h3"
          marginTop="200px"
        >
          Build{" "}
          <span style={{ color: "white" }}>
            the ultimate
            <br />
            trader profile.
          </span>
        </Text>
        <Text color="darkGray" textStyle="cardText" paddingTop="7">
          Your Aluna Social profile is a Trust Pass! Share your profile with
          your friends to prove your trading reputation, while keeping sensitive
          information like position and portfolio size private.
        </Text>
        <Img
          display={{ sm: "none" }}
          src="https://aluna-homepage.herokuapp.com/img/profiles.png"
          paddingTop="10"
        />
        <Link href="https://aluna.social/signup" passHref>
          <Button
            marginTop={{ base: 2, sm: 7 }}
            colorScheme="brand"
            as="a"
            color="white"
            height="50px"
            width={{ base: "100%", sm: "80%" }}
            fontFamily="Roboto"
            // textStyle="callToAction"
          >
            Create your own Aluna profile
          </Button>
        </Link>
      </Box>

      <Box
        padding="10"
        paddingLeft={{ base: 0, sm: "10" }}
        paddingTop={{ base: "10" }}
        display={{ base: "none", sm: "block" }}
      >
        <Img
          alt="Build the ultimate trader profile."
          src="https://aluna-homepage.herokuapp.com/img/profiles.png"
        />
      </Box>
    </SimpleGrid>
  );
}

export default PublicProfile;
