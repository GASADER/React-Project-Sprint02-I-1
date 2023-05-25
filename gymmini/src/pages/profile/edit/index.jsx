import React, { useState, useEffect } from "react";
import Layout from "@/components/layout";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { axiosInstance } from "../../../utils/axiosInstance.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const userSchema = Yup.object().shape({
  userId: Yup.string().required("User ID is required"),
  email: Yup.string().email("Invalid email address"),
  firstName: Yup.string().max(50, "Must be 50 characters or less"),
  lastName: Yup.string().max(50, "Must be 50 characters or less"),
  birthDate: Yup.date()
    .max(new Date(), "Birth date can't be in the future")
    .min(new Date("1900-01-01"), "Invalid birth date"),
  gender: Yup.string().oneOf(["male", "female", "other"]),
  city: Yup.string(),
  height: Yup.number().max(300, "Over 300"),
  weight: Yup.number().max(300, "Over 300"),
  username: Yup.string(),
});

export default function EditProfile() {
  const [imagePreview, setImagePreview] = useState("");
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(userSchema)
  }); 
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/"); 
        return;
      }
    }
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      register("userImage").onChange(event); // Manually trigger onChange for registered field
    }
  };

  const onSubmit = async (data) => {
    try {
      const values = { ...data };
      console.log(data);

      if (typeof window !== "undefined") {
        const userId = localStorage.getItem("userId");
        values.userId = userId;
      }
      localStorage.setItem('userId', values.userId);
      localStorage.setItem('username', values.username);
      localStorage.setItem('userImage', values.userImage);
      axiosInstance
        .put(`api/users/${values.userId}`, values)
        .then(async (response) => {
          console.log(response.data);
          setImagePreview("");
          router.back();
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="firstName" className="text-white">
            First Name
          </label>
          <input {...register("firstName")} name="firstName" />
          {errors.firstName && <div className="text-red-500">{errors.firstName.message}</div>}

          <label htmlFor="lastName" className="text-white">
            Last Name
          </label>
          <input {...register("lastName")} name="lastName" />
          {errors.lastName && <div className="text-red-500">{errors.lastName.message}</div>}

          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input {...register("email")} type="email" name="email" />
          {errors.email && <div className="text-red-500">{errors.email.message}</div>}

          <div className="text-black">
            <label htmlFor="birthDate" className="text-white pr-2">
              Birth Date
            </label>
            <input
              {...register("birthDate")}
              type="date"
              max={new Date().toISOString().split("T")[0]}
              name="birthDate"
            />
            {errors.birthDate && <div className="text-red-500">{errors.birthDate.message}</div>}
          </div>

          <label htmlFor="gender" className="text-white">
            Gender
          </label>
          <select {...register("gender")} className="text-black" name="gender">
            <option value="">Select a gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <div className="text-red-500">{errors.gender.message}</div>}

          <label htmlFor="city" className="text-white">
            City
          </label>
          <input {...register("city")} name="city" />
          {errors.city && <div className="text-red-500">{errors.city.message}</div>}

          <label htmlFor="height" className="text-white">
            Height
          </label>
          <input {...register("height")} type="number" name="height" />
          {errors.height && <div className="text-red-500">{errors.height.message}</div>}

          <label htmlFor="weight" className="text-white">
            Weight
          </label>
          <input {...register("weight")} type="number" name="weight" />
          {errors.weight && <div className="text-red-500">{errors.weight.message}</div>}

          <label htmlFor="username" className="text-white">
            Username
          </label>
          <input {...register("username")} name="username" />
          {errors.username && <div className="text-red-500">{errors.username.message}</div>}

          {/* <div>
            <input
              type="file"
              className="text-white"
              onChange={handleImageChange}
            />
            {imagePreview && <img src={imagePreview} alt="Image Preview" width="200" />}
            {errors.userImage && <div className="text-red-500">{errors.userImage.message}</div>}
          </div> */}

          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  );
}