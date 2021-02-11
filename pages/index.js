import Head from "next/head";
import { Button, Heading, Text, Code, Flex } from "@chakra-ui/react";

import { useAuth } from "@/lib/auth";
import { auth } from "firebase";

import { FastFeedbackIcon } from "../public/icon";

import EmptyState from "@/components/EmptyState";

const Home = () => {
  const auth = useAuth();
  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Heading>Fast Feedback </Heading>
      <FastFeedbackIcon color="black" boxSize="32px" />
      <Text>
        Current user: <Code>{auth?.user ? auth.user.email : "None"}</Code>
      </Text>
      {auth.user ? (
        <EmptyState />
      ) : (
        // <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        <Button
          onClick={(e) => auth.signinWithGithub()}
          variant="link"
          size="sm"
          mt="4"
        >
          Sign In
        </Button>
      )}
    </Flex>
  );
};

export default Home;
