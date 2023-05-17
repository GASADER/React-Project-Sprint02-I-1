import React, { useState } from "react";
import Layout from "@/components/layout";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const postSchema = Yup.object().shape({
  imageUrl: Yup.string(),
  type: Yup.string().oneOf([
    "Biking",
    "Walking",
    "Swimming",
    "Hiking",
    "Running",
  ]).required("Required"),
  distance: Yup.number().max(30, "Over 30 ").required("Required"),
  duration: Yup.object().shape({
    hr: Yup.number().max(24, "Over 24 ").required("Required"),
    min: Yup.number().max(60, "Over 60 ").required("Required"),
  }),
  title: Yup.string().matches(/^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/, "Cannot contain special characters").max(20, "Must be 20 characters or less").required("Required"),
  description: Yup.string().matches(/^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/, "Cannot contain special characters").max(220, "Must be 220 characters or less").required("Required"),
});


function readFileAsBase64(file, setImagePreview) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
      setImagePreview(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function PostActivity() {
  const [imagePreview, setImagePreview] = useState("");

  const handleSubmit = async (values) => {
    try {
      console.log("asasa");
      const file = values.imageUrl;
      if (file) {
        const base64 = await readFileAsBase64(file, setImagePreview);
        values.imageUrl = base64;
      }
      console.log(values);
      const response = await axios.post("http://127.0.0.1:3001/users", values);
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
              imageUrl: "",
              type: "",
              distance: "",
              duration: { hr: "", min: "" },
              date: "",
              title: "",
              description: "",
            }}
            validationSchema={postSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, setFieldValue }) => (
              <Form className="flex flex-col gap-2">
                <div className="container flex flex-col  gap-4 ">
                  <Field name="imageUrl">
                    {({ field }) => (
                      <div>
                        <input
                          type="file"
                          className="text-white"
                          onChange={(event) => {
                            setFieldValue(
                              "imageUrl",
                              event.currentTarget.files[0]
                            );
                            setImagePreview(
                              URL.createObjectURL(event.currentTarget.files[0])
                            );
                          }}
                        />
                        {imagePreview && (
                          <img
                            src={imagePreview}
                            alt="Image Preview"
                            width="200"
                          />
                        )}
                        {errors.imageUrl && touched.imageUrl && (
                          <div>{errors.imageUrl}</div>
                        )}
                      </div>
                    )}
                  </Field>

                  <div className="container flex gap-4 ">
                    <label htmlFor="type" className="text-white flex">
                      Type
                    </label>
                    {errors.type && touched.type ? (
                      <div>{errors.type}</div>
                    ) : null}
                  </div>
                  <Field className="text-black" name="type" as="select">
                    <option value="">Select a type</option>
                    <option value="Biking">Biking</option>
                    <option value="Walking">Walking</option>
                    <option value="Swimming">Swimming</option>
                    <option value="Hiking">Hiking</option>
                    <option value="Running">Running</option>
                  </Field>

                  <div className="container flex gap-4 ">
                    <label htmlFor="distance" className="text-white">
                      Distance
                    </label>
                    {errors.distance && touched.distance ? (
                      <div>{errors.distance}</div>
                    ) : null}
                  </div>
                  <Field name="distance" type="number" />

                  <label htmlFor="duration" className="text-white">
                    Duration
                  </label>
                  <div>
                    <div className="flex gap-4">
                      <label htmlFor="duration.hr" className="text-white">
                        hr
                      </label>
                      <Field name="duration.hr" type="text" />
                    </div>
                    {errors.duration &&
                      touched.duration &&
                      errors.duration.hr && <div>{errors.duration.hr}</div>}
                  </div>

                  <div>
                    <div className="flex gap-4">
                      <label htmlFor="duration.min" className="text-white">
                        min
                      </label>
                      <Field name="duration.min" type="text" />
                    </div>
                    {errors.duration &&
                      touched.duration &&
                      errors.duration.min && <div>{errors.duration.min}</div>}
                  </div>

                  <div className="container flex gap-4 ">
                    <label htmlFor="title" className="text-white">
                      Title
                    </label>
                    {errors.title && touched.title ? (
                      <div>{errors.title}</div>
                    ) : null}
                  </div>
                  <Field name="title" />

                  <div className="container flex gap-4 ">
                    <label htmlFor="description" className="text-white">
                      Description
                    </label>
                    {errors.description && touched.description ? (
                      <div>{errors.description}</div>
                    ) : null}
                  </div>
                  <Field name="description" type="description" />
                  <button type="submit">Submit</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Layout>
    </>
  );
}
