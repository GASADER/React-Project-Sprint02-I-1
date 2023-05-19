import React from "react";
import Layout from "@/components/layout";
import { useRouter } from "next/router";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { app } from "@/utils/firebaseConfig.js";
import { firebase } from "@/utils/firebaseConfig.js";
import {
  createUserWithEmailAndPassword,
  browserSessionPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from "@firebase/auth";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(/^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/, "Password cannot contain special characters")
    .required("Required"),
});

export default function Register() {
  const router = useRouter();
  const handleSubmit = async (values) => {
    try {
      console.log(values);
      const auth = getAuth(app);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      console.log("User created:", userCredential.user);
      values.userId = userCredential.user.uid
      values.email = userCredential.user.email
      values.tokens = userCredential.user.getIdToken()
      const response = await axios.post("http://127.0.0.1:3001/api/user",values);
      router.push("/login")
      console.log(response.data);
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
