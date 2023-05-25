import React, { useEffect, useState } from "react";
import Card from "@/components/card";
import Mockserver from "@/components/mock";
import Layout from "@/components/layout";
import Upload from "@/components/mockphoto";
import { axiosInstance } from "../../../utils/axiosInstance.js";
import { useRouter } from "next/router";

export default function FindType() {
  const [prop, setProp] = useState([]);
  const router = useRouter(); // เพิ่มการใช้งาน useRouter()

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { slug } = router.query; 
      console.log(slug)
      const response = await axiosInstance.get(`/api/posts/?activity=${slug}`);
      console.log(response);
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