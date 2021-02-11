import Head from "next/head";
import { Button, Heading, Text, Code, Flex } from "@chakra-ui/react";

import { useAuth } from "@/lib/auth";
import { auth } from "firebase";

import { FastFeedbackIcon } from "../public/icon";
1;

import EmptyState from "@/components/EmptyState";

const Dashboard = () => {
  const auth = useAuth();

  if (!auth.user) {
    return "Loading...";
  }
  return <EmptyState />;
};

export default Dashboard;
