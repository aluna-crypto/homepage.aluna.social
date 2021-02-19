import {
  //Link as ChakraLink,
  Text,
  Grid,
  Box,
} from "@chakra-ui/react";
import Banner from "../components/Banner";
import Button from "../components/Button";

import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import MultiExchange from "../components/MultiExchange";

const Index = () => (
  <Container height="100vh">
    <Grid templateColumns="repeat(1fr)" gap={6}>
      <Banner />
      <MultiExchange />
    </Grid>

    <h1>aluna static homepage</h1>
    <Button>Login</Button>

    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
  </Container>
);

export default Index;
