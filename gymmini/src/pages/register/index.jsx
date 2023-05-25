import React from "react";
import Layout from "@/components/layout";
import { useRouter } from "next/router";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useSnackbar } from "notistack";
import { app } from "@/utils/firebaseConfig.js";
import { createUserWithEmailAndPassword, getAuth } from "@firebase/auth";
import { axiosInstance } from "../../utils/axiosInstance.js";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/,
      "Password cannot contain special characters"
    )
    .required("Required"),
});

export default function Register() {
  const { enqueueSnackbar } = useSnackbar();
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
      const user = userCredential.user;
      localStorage.setItem("userId", user.uid);
      localStorage.setItem("token", user.accessToken);

      console.log("User created:", userCredential.user);

      const username = user.name || "user";

      const userInfo = {
        userId: user.uid,
        email: values.email,
        username: username,
      };
      console.log(userInfo);

      axiosInstance
        .post(`api/users/`, userInfo)
        .then(async (response) => {
          console.log("response: ", response);
          enqueueSnackbar("Register success.", { variant: "success" });
          router.push("/login");
        })
        .catch((error) => {
          const keys = Object.keys(localStorage);
          keys.forEach((key) => {
            localStorage.removeItem(key);
          });
          console.log("error: " + error.message);
          enqueueSnackbar(`Register failed: $`);
        });
    } catch (error) {
      const keys = Object.keys(localStorage);
      keys.forEach((key) => {
        localStorage.removeItem(key);
      });
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(true);
      console.log(errorCode, errorMessage);
      enqueueSnackbar(`Register failed: ${errorMessage}`, { variant: "error" });
    }
  };

  return (
    <>
      <Layout className="">
      <div className="w-full h-screen flex items-center justify-center">
        <div className=" bg-white  rounded-3xl p-4 h-auto">
        <div className="  flex flex-col items-center justify-center bg-purple-800 rounded-3xl  p-20">
              <div className="pb-16 text-white text-3xl ">Register</div>
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
                    <button type="submit" className=" rounded-3xl bg-cyan-500">
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
