import React from "react";
import Layout from "@/components/layout";
import Mockserver from "@/components/mock";
import { Formik, Form, Field } from "formik";
import { useForm } from "react-hook-form";

export default function login() {
  return (
    <>
      <Layout>
        {/* <Form className="flex flex-col gap-2">
                  <div className="container flex gap-4 ">
                  <label htmlFor="firstName" className="text-white">
                    Username
                  </label>
                  </div>
                  <Field name="firstName" /> 
                  
                  <div className="container flex gap-4 ">
                  <label htmlFor="lastName" className="text-white">
                    Password
                  </label>
                  </div>
                  <Field name="lastName" />
        </Form> */}
      <Mockserver />
      </Layout>

    </>
  );
}