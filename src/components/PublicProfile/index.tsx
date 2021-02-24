import {
  Box,
  Button,
  HStack,
  Icon,
  Img,
  Link,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import Profile from "../atoms/icons/Profile/Index";

function PublicProfile() {
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 2 });
  const hiddeMobile = useBreakpointValue({ base: true, sm: false });
  return (
    <SimpleGrid
      columns={columns}
      // backgroundImage="url('profile.png')"
      backgroundImage={`url('https://aluna-homepage.herokuapp.com/img/alunaut${
        hiddeMobile ? "-mobile" : ""
      }.png')`}
      backgroundSize={hiddeMobile ? "contain" : "cover"}
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
          <Text textStyle="cardTitle" color="white">
            Public Profiles
          </Text>
        </HStack>
        <Text textStyle="cardSubTitle" color="#f5be23" marginTop="200px">
          Build{" "}
          <span style={{ color: "white" }}>
            the ultimate
            <br />
            trader profile.
          </span>
        </Text>
        <Text
          color="darkGray"
          textStyle="cardText"
          paddingTop="7"
          width="22.5rem"
        >
          Your Aluna Social profile is a Trust Pass! Share your profile with
          your friends to prove your trading reputation, while keeping sensitive
          information like position and portfolio size private.
        </Text>
        <Img
          hidden={!hiddeMobile}
          src="https://aluna-homepage.herokuapp.com/img/profiles.png"
          maxW="22.5rem"
          paddingTop="4"
        />
        <Link href="https://aluna.social/signup">
          <Button
            marginTop={hiddeMobile ? 2 : 7}
            colorScheme="brand"
            color="white"
            marginRight="2"
            height="3rem"
            width="22.5rem"
            textStyle="callToAction"
          >
            Create your own Aluna profile
          </Button>
        </Link>
      </Box>

      <Box paddingLeft="10" hidden={hiddeMobile}>
        <Img
          src="https://aluna-homepage.herokuapp.com/img/profiles.png"
          maxW="22.5rem"
        />
      </Box>
    </SimpleGrid>
  );
}

export default PublicProfile;
