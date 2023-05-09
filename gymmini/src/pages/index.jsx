import React from "react";
import Card from "@/components/card";
import Mockserver from "@/components/mock";
import Layout from "@/components/layout";

import { MockdataProvider } from "@/context/cardContext";

export default function Home() {
  return (
    <>
      <Layout>
        <section className="lg:columns-3 md:columns-2 px-8 py-4 ">
          <MockdataProvider>
            <Card></Card>
          </MockdataProvider>
        </section>
      </Layout>

      <Mockserver />
    </>
  );
}
