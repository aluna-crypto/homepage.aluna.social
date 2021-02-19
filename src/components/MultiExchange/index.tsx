import {
  Box,
  Text,
  Button,
  VStack,
  Center,
  Icon,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import {} from "@chakra-ui/react";
import Bitmex from "../atoms/Bitmex";

interface MultiExchangeInterface {}

function ConnectedExchange() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd">
        <g fill="#FFF">
          <g>
            <g>
              <path
                d="M19.671 4.5c-2.002-2-5.258-2-7.26.001l-2.529 2.53C8.75 8.163 8.167 9.607 8.24 11.095c.072 1.453.748 2.807 1.855 3.715.223.183.493.272.76.272.347 0 .692-.15.929-.44.42-.512.345-1.268-.167-1.688-.576-.472-.942-1.211-.98-1.977-.028-.568.113-1.42.942-2.25l2.53-2.529c1.065-1.066 2.8-1.066 3.865 0 1.066 1.066 1.066 2.8 0 3.866l-1.343 1.343c-.469.469-.469 1.229 0 1.697.468.469 1.228.469 1.697 0l1.343-1.343c2.002-2.002 2.002-5.258 0-7.26"
                transform="translate(-230 -690) translate(190 650) translate(40 40)"
              />
              <path
                d="M13.88 9.56c-.513-.42-1.27-.345-1.69.167-.42.513-.345 1.269.168 1.689.576.472.942 1.211.98 1.977.028.568-.113 1.42-.942 2.249l-2.53 2.53c-.516.516-1.202.8-1.932.8s-1.417-.284-1.934-.8c-.516-.516-.8-1.203-.8-1.933s.284-1.416.8-1.933l1.344-1.343c.469-.469.469-1.229 0-1.697-.469-.469-1.228-.469-1.697 0l-1.343 1.343c-.97.97-1.504 2.259-1.504 3.63s.534 2.66 1.503 3.63c.97.97 2.26 1.504 3.63 1.504 1.372 0 2.66-.534 3.63-1.504l2.53-2.53c1.132-1.132 1.716-2.575 1.642-4.064-.072-1.453-.748-2.807-1.855-3.715"
                transform="translate(-230 -690) translate(190 650) translate(40 40)"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
function MultiExchange({}: MultiExchangeInterface) {
  return (
    <Box w="100%" h="500px">
      <Box w="900px" minH="500px" bg="#1d1d1c" spacing={6} align="stretch">
        <HStack>
          <Icon as={ConnectedExchange} />
          <Text fontSize="4xl" color="white" alignItems="">
            Multi Exchange Terminal
          </Text>
        </HStack>
        <Text fontSize="2xl" color="#f5be23">
          Manage all your exchange <br />
          accounts
          <span style={{ color: "white" }}> from a single interface.</span>
        </Text>
        <Bitmex />
      </Box>
    </Box>
  );
}

export default MultiExchange;
