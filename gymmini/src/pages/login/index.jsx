import React from "react";
import Layout from "@/components/layout";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  getAuth,
  signInWithEmailAndPassword,
  browserSessionPersistence,
  setPersistence,
} from "firebase/auth";
import { app } from "@/utils/firebaseConfig.js";
import { useRouter } from "next/router";
import { axiosInstance } from "../../utils/axiosInstance.js";
import { useSnackbar } from "notistack";

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

export default function Login() {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    const auth = getAuth(app);
    setPersistence(auth, browserSessionPersistence);
    try {
      console.log(values);
      const { email, password } = values;

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // const img = "https://res.cloudinary.com/dtg5nqs9s/image/upload/v1684895217/post_pic/smy60gr4ronxsvbkfmig.webp"
      const user = userCredential.user;
      enqueueSnackbar("Login success.", { variant: "success" });
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("userId", user.uid);

      const response = await axiosInstance.get(`/api/users/${user.uid}`);
      console.log(response.data);
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("userImage", response.data.userImage);

      console.log("User logged in:", userCredential.user);
      router.push("/");
    } catch (error) {
      console.error(error);
      enqueueSnackbar(errorMessage, { variant: "error" });
    }
  };

  return (
    <>
      <Layout>
      <div className="w-full h-screen flex items-center justify-center">
        <div className=" bg-white  rounded-3xl p-4 h-auto">
          <div className="  flex flex-col items-center justify-center bg-purple-800 rounded-3xl  p-20">
            <div className="pb-16 text-white text-3xl ">Login</div>
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
                  <button type="submit" className=" rounded-3xl bg-cyan-500">Submit</button>
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
