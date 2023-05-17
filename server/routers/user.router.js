import express from "express";
import { getall } from "../controllers/user.controller.js";
import cloudinary from "../service/cloudniary.js";

const router = express.Router();

// router.get("/", getall);
router.get("/", async (req, res) => {
  const data = req.body;
  console.log(data);
  res.json(data)
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const fileStr = req.body.imageUrl;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      folder: "profile_pic",
      width: "800"
    });
    data.imageUrl = uploadedResponse.url;
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while uploading the image" });
  }
});

router.put("/", async (req, res) => {
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
