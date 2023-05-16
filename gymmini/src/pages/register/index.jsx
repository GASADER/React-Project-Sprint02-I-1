import React, { useState } from "react";
import Layout from "@/components/layout";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const userSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/,
      "Password cannot contain special characters"
    )
    .required("Required"),
  firstName: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  birthDate: Yup.date()
    .required("Required")
    .max(new Date(), "Birth date can't be in the future")
    .min(new Date("1900-01-01"), "Invalid birth date"),
  gender: Yup.string().oneOf(["male", "female", "other"]).required("Required"),
  city: Yup.string().required("Required"),
  height: Yup.number().max(300, "Over 300 ").required("Required"),
  weight: Yup.number().max(300, "Over 300 ").required("Required"),
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

function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function register() {
  const handleSubmit = async (values) => {
    try {
      const file = values.profileImage;
      if (file) {
        const base64 = await readFileAsBase64(file);
        values.profileImage = base64;
      }

      const response = await axios.put("http://127.0.0.1:3001/users", values);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

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
            onSubmit={handleSubmit}
          >
            {({ errors, touched, setFieldValue }) => (
              <Form className="flex flex-col gap-2">
                <div className="container flex gap-4 ">
                  <label htmlFor="firstName" className="text-white ">
                    First Name
                  </label>
                  {errors.firstName && touched.firstName ? (
                    <div className=" text-red-500">{errors.firstName}</div>
                  ) : null}
                </div>
                <Field name="firstName" />

                <label htmlFor="lastName" className="text-white">
                  Last Name
                </label>
                <Field name="lastName" />
                {errors.lastName && touched.lastName ? (
                  <div>{errors.lastName}</div>
                ) : null}

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
                        <div>{errors.birthDate}</div>
                      ) : null}
                    </div>
                  )}
                </Field>

                <label htmlFor="gender" className="text-white">
                  Gender
                </label>
                <Field className="text-black" name="gender" as="select">
                  <option value="">Select a gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Field>
                {errors.gender && touched.gender ? (
                  <div>{errors.gender}</div>
                ) : null}

                <label htmlFor="city" className="text-white">
                  City
                </label>
                <Field name="city" />
                {errors.city && touched.city ? <div>{errors.city}</div> : null}

                <label htmlFor="height" className="text-white">
                  Height
                </label>
                <Field name="height" type="number" />
                {errors.height && touched.height ? (
                  <div>{errors.height}</div>
                ) : null}

                <label htmlFor="weight" className="text-white">
                  Weight
                </label>
                <Field name="weight" type="number" />
                {errors.weight && touched.weight ? (
                  <div>{errors.weight}</div>
                ) : null}
                <label htmlFor="profileName" className="text-white">
                  ProfileName
                </label>
                <Field name="profileName" />
                {errors.profileName && touched.profileName && (
                  <div>{errors.profileName}</div>
                )}

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
                        <div>{errors.profileImage}</div>
                      ) : null}
                    </div>
                  )}
                </Field>

                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </div>
      </Layout>
    </>
  );
}
