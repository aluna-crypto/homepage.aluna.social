import fetch from "isomorphic-unfetch";
import {
  InputGroup,
  Input,
  InputRightAddon,
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";

function Subscribe() {
  const toast = useToast();
  const [email, setEmail] = useState("");

  const registerUser = async () => {
    const res = await fetch(
      "https://aluna-homepage.herokuapp.com/api/subscribe",
      {
        body: JSON.stringify({
          email: email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );

    const result = await res.json();
    console.log("result ", result);
    if (result.ok) {
      toast({
        title: "Email subscribe successfully.",
        // description: "We've created your account for you.",
        // status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
    if (!result.ok) {
      toast({
        title: "Something went wrong please try again.",
        // description: "We've created your account for you.",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    }
  };
  return (
    <div>
      <InputGroup
        size="sm"
        borderColor="#242424"
        backgroundColor="#242424"
        borderRadius="2xl"
      >
        <Input
          placeholder="Your email"
          value={email}
          type="email"
          required
          onChange={(ev) => setEmail(ev.currentTarget.value)}
          color="white"
        />
        <InputRightAddon paddingLeft="0" overflow="hidden" paddingRight="0">
          <Button
            colorScheme="brand"
            color="white"
            marginRight="2"
            width="100%"
            fontSize="0.8rem"
            margin="0"
            type="submit"
            onClick={registerUser}
          >
            Subscribe
          </Button>
        </InputRightAddon>
      </InputGroup>
    </div>
  );
}

export default Subscribe;
