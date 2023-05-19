import React from "react";
import Layout from "@/components/layout";
import Mockserver from "@/components/mock";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "@/utils/firebaseConfig.js";
import axios from "axios";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(/^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/, "Password cannot contain special characters")
    .required("Required"),
});


export default function Login() {
  const auth = getAuth(app);
  const handleSubmit = async (values) => {
    try {
      console.log(values);
      const { email, password } = values;
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", userCredential.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Layout>
        <div className=" flex flex-col items-center justify-center my-40">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col gap-2">
                <label htmlFor="email" className="text-white">
                  Email
                </label>
                <Field name="email" type="email" />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}

                <label htmlFor="password" className="text-white">
                  Password
                </label>
                <Field name="password" type="password" />
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </div>
      </Layout>
    </>
  );
}
