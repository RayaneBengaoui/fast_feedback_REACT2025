import React from "react";
import { Heading, Flex, Text, Button } from "@chakra-ui/react";

import AddSiteModal from "./AddSiteModel";

const EmptyState = () => (
  <Flex
    width="100%"
    backgroundColor="white"
    borderRadius="8px"
    p={16}
    justify="center"
    direction="column"
    align="center"
  >
    <Heading mb={2} size="md">
      You haven't added any sites.
    </Heading>
    <Text mb={4}>Welcome Let's get started.</Text>
    <AddSiteModal />
  </Flex>
);

export default EmptyState;
