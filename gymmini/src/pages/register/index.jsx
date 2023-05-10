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
  birthDate: Yup.date().required("Required"),
  gender: Yup.string().oneOf(["male", "female", "other"]).required("Required"),
  city: Yup.string().required("Required"),
  height: Yup.number()
    .max(300, "Over 300 ")
    .required("Required"),
  weight: Yup.number()
    .max(300, "Over 300 ")
    .required("Required"),
  profileName: Yup.string().required("Required"),
  profileImage: Yup.mixed()
    .test("fileSize", "File size is too large", (value) => {
      return value && value.size <= 10485760; // 10 MB
    })
    .test("fileType", "File type is not supported", (value) => {
      return (
        value && ["image/jpeg", "image/png", "image/gif"].includes(value.type)
      );
    })
    .required("Required"),

});

export default function register() {
  return (
    <>
      <Layout>
        <div className=" flex flex-col items-center">
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
            {({ errors, touched, setFieldValue }) => (
              <Form className="flex flex-col gap-2">
                <div className="container flex gap-4 ">
                <label htmlFor="firstName" className="text-white ">
                  First Name
                </label>{errors.firstName && touched.firstName ? (
                  <div className=" text-red-500">{errors.firstName}</div>
                ) : null}
                </div>
                <Field name="firstName" /> 
                
                <div className="container flex gap-4 ">
                <label htmlFor="lastName" className="text-white">
                  Last Name
                </label>
                {errors.lastName && touched.lastName ? (
                  <div className=" text-red-500">{errors.lastName}</div>
                ) : null}
                </div>
                <Field name="lastName" />

                <div className="container flex gap-4 ">
                <label htmlFor="email" className="text-white">
                  Email
                </label>
                {errors.email && touched.email ? (
                  <div className="text-red-500">{errors.email}</div>
                ) : null}
                </div>
                <Field name="email" type="email" />

                <div className="container flex gap-4 ">
                <label htmlFor="password" className="text-white">
                Password
                </label>
                {errors.password && touched.password ? (
                  <div className="text-red-500">{errors.password}</div>
                ) : null}
                </div>
                <Field name="password" type="password" />


                <Field name="birthDate">
                  {({ field }) => (
                    <div className=" text-black">
                      <label htmlFor="birthDate" className="text-white pr-2">
                        Birth Date
                      </label>
                      <input
                        {...field}
                        type="date"
                        max={new Date().toISOString().split("T")[0]} // set max to today's date
                      />
                      {errors.birthDate && touched.birthDate ? (
                        <div className="text-red-500">{errors.birthDate}</div>
                      ) : null}
                    </div>
                  )}
                </Field>

                <div className="container flex gap-4 ">
                <label htmlFor="gender" className="text-white">Gender</label>
                <Field className="text-black" name="gender" as="select">
                  <option value="">Select a gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Field>
                {errors.gender && touched.gender ? (
                  <div className="text-red-500">{errors.gender}</div>
                ) : null}
                </div>

                <div className="container flex gap-4 ">
                <label htmlFor="city" className="text-white">City</label>
                <Field name="city" />
                {errors.city && touched.city ? <div className="text-red-500">{errors.city}</div> : null}
                </div>

                <div className="container flex gap-4">
                <label htmlFor="height" className="text-white">Height</label>
                <Field name="height" type="number" />
                {errors.height && touched.height ? (
                  <div className="text-red-500">{errors.height}</div>
                ) : null}
                </div>

                <div className="container flex gap-40">
                <label htmlFor="weight" className="text-white">Weight</label>
                <Field name="weight" type="number" />
                {errors.weight && touched.weight ? (
                  <div className="text-red-500">{errors.weight}</div>
                ) : null}
                </div>

                <div className="container flex gap-40">
                <label htmlFor="profileName" className="text-white">ProfileName</label>
                <Field name="profileName" />
                {errors.profileName && touched.profileName && (
                  <div className="text-red-500">{errors.profileName}</div>
                )}
                </div>

                  <div>
                <Field name="profileImage">
                  {({ field }) => (
                    <div>
                      <input
                        type="file"
                        className=" text-white"
                        onChange={(event) =>
                          setFieldValue(
                            "profileImage",
                            event.currentTarget.files[0]
                          )
                        }
                      />
                      {errors.profileImage && touched.profileImage ? (
                        <div className="text-red-500">{errors.profileImage}</div>
                      ) : null}
                    </div>
                  )}
                </Field>
                </div>
                    
                
                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </div>
      </Layout>
    </>
  );
}
