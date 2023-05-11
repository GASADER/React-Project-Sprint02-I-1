import express from "express";
import { getall } from "../controllers/user.controller.js";
import { post } from "../models/mockdata.js";
import cloudinary from "../service/cloudniary.js";

const router = express.Router();

router.get("/", getall);

router.post("/", (req, res) => {
  const img = req.body;
  console.log(img);
  res.send("post");
});

router.put("/", async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      public_id: "olympic_flag",
    });
    console.log(uploadedResponse);
    res.json({ msg: "Upload complete" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "Something went wrong" });
  }
});

export default router;
