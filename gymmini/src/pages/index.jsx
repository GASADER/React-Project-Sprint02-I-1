import React from "react";
import Card from "@/components/card";
import Mockserver from "@/components/mock";
import Layout from "@/components/layout";

import { MockdataProvider } from "@/context/cardContext";

export default function Home() {
  return (
    <>
      <Layout>
        <section className="feedsection  lg:columns-3 md:columns-2 p-4 ">
          <MockdataProvider>
            <Card></Card>
          </MockdataProvider>
        </section>
      </Layout>

      <Mockserver />
    </>
  );
}
