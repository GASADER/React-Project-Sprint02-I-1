import React, { useState } from "react";
import Layout from "@/components/layout";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const userSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
  firstName: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  birthDate: Yup.string().required("Required"),
  gender: Yup.string()
    .oneOf(["male", "female", "other"])
    .required("Required"),
  city: Yup.string().required("Required"),
  height: Yup.number().required("Required"),
  weight: Yup.number().required("Required"),
  profileName: Yup.string().required("Required"),
  profileImage: Yup.string().required("Required"),
});

export default function register() {
  return (
    <>
      <Layout>
        <div className=" flex flex-col">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              birthDate: "",
              gender: "",
              city: "",
              height: "",
              weight: "",
              profileName: "",
              profileImage: "",
            }}
            validationSchema={userSchema}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Field name="firstName" />
                {errors.firstName && touched.firstName ? (
                  <div>{errors.firstName}</div>
                ) : null}
                <Field name="lastName" />
                {errors.lastName && touched.lastName ? (
                  <div>{errors.lastName}</div>
                ) : null}
                <Field name="email" type="email" />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
                <Field name="password" type="password" />
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
                <Field name="birthDate" />
                {errors.birthDate && touched.birthDate ? (
                  <div>{errors.birthDate}</div>
                ) : null}
                <Field name="gender" as="select">
                  <option value="">Select a gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Field>
                {errors.gender && touched.gender ? (
                  <div>{errors.gender}</div>
                ) : null}
                <Field name="city" />
                {errors.city && touched.city ? (
                  <div>{errors.city}</div>
                ) : null}
                <Field name="height" type="number" />
                {errors.height && touched.height ? (
                  <div>{errors.height}</div>
                ) : null}
                <Field name="weight" type="number" />
                {errors.weight && touched.weight ? (
                  <div>{errors.weight}</div>
                ) : null}
              </Form>
            )}
            </Formik>
            </div>
            </Layout>
            </>
  )}