import Head from "next/head";
import { Button, Heading, Text, Code, Flex } from "@chakra-ui/react";

import { useAuth } from "@/lib/auth";
import { auth } from "firebase";

import useSWR from "swr";

import { FastFeedbackIcon } from "../public/icon";

import EmptyState from "@/components/EmptyState";
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import DashboardShell from "@/components/DashboardShell";
import fetcher from "@/utils/fetcher";
import SiteTable from "@/components/SiteTable";

const Dashboard = () => {
  const auth = useAuth();
  const { data } = useSWR("/api/sites", fetcher);

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
    </DashboardShell>
  );
};

export default Dashboard;
