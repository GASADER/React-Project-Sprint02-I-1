import React from "react";
import Card from "@/components/card";
import Mockserver from "@/components/mock";
import Layout from "@/components/layout";

import { MockdataProvider } from "@/context/cardContext";

export default function Home() {
  return (
    <>
      <Layout> 
          <MockdataProvider>
            <Card></Card>
          </MockdataProvider>
      </Layout>

      <Mockserver />
    </>
  );
}
