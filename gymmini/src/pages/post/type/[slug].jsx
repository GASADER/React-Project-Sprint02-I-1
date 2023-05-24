import React, { useEffect, useState } from "react";
import Card from "@/components/card";
import Mockserver from "@/components/mock";
import Layout from "@/components/layout";
import Upload from "@/components/mockphoto";
import { axiosInstance } from "../../../utils/axiosInstance.js";
import { useRouter } from "next/router"; // เพิ่ม import นี้

export default function FindType() {
  const [prop, setProp] = useState([]);
  const router = useRouter(); // เพิ่มการใช้งาน useRouter()

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { slug } = router.query; // ดึงค่า slug จาก router
      const response = await axiosInstance.get(`/api/posts/?type=${slug}`); // เพิ่ม query parameter ให้กับ URL
      console.log(slug);
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