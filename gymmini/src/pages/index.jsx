import React, { useEffect, useState } from "react";
import Card from "@/components/card";
import Mockserver from "@/components/mock";
import Layout from "@/components/layout";
import Upload from "@/components/mockphoto";
import { axiosInstance } from "../utils/axiosInstance.js";
export default function Home() {
  const [prop, setProp] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/api/posts"); 
      console.log(response)
      setProp(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  return (
    <>
      <Layout> 
            <Card prop={prop}></Card>
      </Layout>
    </>
  );
}
