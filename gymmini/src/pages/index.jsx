import React from "react";
import Card from "@/components/card";
import Mockserver from "@/components/mock";
import Layout from "@/components/layout";
import { mockdata } from "@/data/mockdata";
import Upload from "@/components/mockphoto";

export default function Home() {
  return (
    <>
      <Layout> 
            <Card prop={mockdata}></Card>
      </Layout>
      <Mockserver />
      <Upload/>
    </>
  );
}
