import express from "express";
import { getall } from "../controllers/user.controller.js";
import cloudinary from "../service/cloudniary.js";

const router = express.Router();

router.get("/", getall);

router.put("/", async (req, res) => {
  const data = req.body;
  const fileStr = req.body.profileImage;
  const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
    folder:"profile_pic",
    width:"800"
  });
  data.profileImage = uploadedResponse.url
  console.log(data);
  res.json(data)
});

router.post("/", async (req, res) => {
  try {
    const fileStr = req.body.data;
    //upload API
    //https://cloudinary.com/documentation/image_upload_api_reference
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      folder:"profile_pic",
      width:"800"
    });
    console.log(uploadedResponse);
    res.json({ msg: "Upload complete" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "Something went wrong" });
  }
});

export default router;
