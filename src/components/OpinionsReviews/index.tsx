import { Box, Img, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function OpinionsReviews() {
  return (
    <Box
      // backgroundImage="url('reviews.png')"
      // backgroundRepeat="no-repeat"
      backgroundColor="#1d1d1c"
      borderRadius="2xl"
      minHeight="566px"
      width="100%"
      align="left"
      padding="10"
    >
      <Text textStyle="cardSubTitle" color="white" as="h2">
        Opinions & Reviews
      </Text>
      <SimpleGrid
        columns={[1, 2, 3]}
        spacingX="9"
        spacingY="9"
        marginTop="70px"
      >
        <VStack spacing="5" alignItems="flex-start">
          <Text color="darkGray" textStyle="testimonials">
            “I really like the ability to view trades across various exchanges
            in one place from various traders. This allows me to have a more
            multiplayer experience in crypto unlike the normal trading
            experience of traders with charts and exchanges. Knowing that others
            are down or up makes the trading experience more exciting and
            educational at the same time.”
          </Text>
          <Link href="https://www.linkedin.com/in/spencer89/" passHref>
            <a target="_blank" rel="nofollow noopener noreferrer">
              <SimpleGrid
                columns={2}
                spacing="3"
                templateColumns=" 1fr 4fr"
                alignSelf="start"
              >
                <Box width="10">
                  <Img
                    src="https://aluna.social/img/spencer.jpeg"
                    alt="Spencer Yang"
                    w="10"
                  />
                </Box>
                <VStack align="stretch">
                  <Text color="white" textStyle="cardText">
                    Spencer Yang
                  </Text>
                  <Text
                    fontSize="0.7rem"
                    color="darkGray"
                    marginTop="0 !important"
                  >
                    Ex-VP at CoinMarketCap
                  </Text>
                </VStack>
              </SimpleGrid>
            </a>
          </Link>
        </VStack>

        <VStack spacing="5" alignItems="flex-start">
          <Text color="darkGray" textStyle="testimonials">
            “Aluna.Social is my go to trading terminal, it allows you access to
            multiple exchanges from a single interface, which has made my
            trading so much more seamless. Trading can be a lonely journey, but
            Aluna.Social allows you to copy and learn the trades of the top
            performing traders on the leaderboard.”
          </Text>
          <Link href="https://aluna.social/magnus" passHref>
            <a target="_blank" rel="nofollow noopener noreferrer">
              <SimpleGrid
                columns={2}
                spacing="3"
                templateColumns="1fr 4fr"
                align="start"
              >
                <Box width="10">
                  <Img
                    alt="Magnus"
                    src="https://res.cloudinary.com/hha9zkbyo/image/upload/c_fill,fl_progressive,h_140,w_140/mrbb3cxgkjru4xr7fyt0"
                  />
                </Box>
                <VStack align="stretch">
                  <Text color="white" textStyle="cardText">
                    @Magnus
                  </Text>
                  <Text
                    fontSize="0.7rem"
                    color="darkGray"
                    marginTop="0 !important"
                  >
                    Aluna Top Trader — Aug 2020
                  </Text>
                </VStack>
              </SimpleGrid>
            </a>
          </Link>
        </VStack>

        <VStack
          backgroundColor="#242424"
          paddingBottom="4"
          textAlign="left"
          alignItems="start"
          borderRadius="base"
        >
          <Img
            borderTopRadius="base"
            alt="A Social Copy Trading Platform for Crypto Traders"
            src="https://aluna-homepage.herokuapp.com/img/opinions-review.jpg"
          />
          <Text color="darkGray" padding="6" textStyle="cardText">
            Aluna.Social Review 2021: A Social Copy Trading Platform for Crypto
            Traders
          </Text>
          <Link
            href="https://blog.coincodecap.com/aluna-social-review"
            passHref
          >
            <a target="_blank" rel="nofollow noopener noreferrer">
              <Img
                src="https://aluna-homepage.herokuapp.com/img/coin-cap.png"
                paddingLeft="6"
                alt="blog.coindecap.com"
                w="111px"
              />
              <Text color="darkGray" paddingLeft="6">
                blog.coindecap.com
              </Text>
            </a>
          </Link>
        </VStack>
      </SimpleGrid>
    </Box>
  );
}

export default OpinionsReviews;
