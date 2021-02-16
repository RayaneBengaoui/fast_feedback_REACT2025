import Head from "next/head";
import { Button, Heading, Text, Code, Flex } from "@chakra-ui/react";

import { useAuth } from "@/lib/auth";
import { auth } from "firebase";

import { FastFeedbackIcon } from "../public/icon";

import EmptyState from "@/components/EmptyState";
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import DashboardShell from "@/components/DashboardShell";

const Dashboard = () => {
  const auth = useAuth();

  if (!auth.user) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }
  return (
    <DashboardShell>
      <EmptyState />
    </DashboardShell>
  );
};

export default Dashboard;
