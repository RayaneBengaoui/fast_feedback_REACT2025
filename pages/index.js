import Head from "next/head";
import { Button, Heading, Text, Code } from "@chakra-ui/react";

import { useAuth } from "@/lib/auth";
import { auth } from "firebase";

import { FastFeedbackIcon } from "../public/icon";

const Home = () => {
  const auth = useAuth();
  return (
    <div>
      <main>
        <Heading>Fast Feedback </Heading>
        <FastFeedbackIcon color="black" boxSize="32px" />
        <Text>
          Current user: <Code>{auth?.user ? auth.user.email : "None"}</Code>
        </Text>
        {auth.user ? (
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        ) : (
          <Button onClick={(e) => auth.signinWithGithub()}>Sign In</Button>
        )}
      </main>
    </div>
  );
};

export default Home;
