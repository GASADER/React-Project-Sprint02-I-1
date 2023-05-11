import express from "express";
import { getall } from "../controllers/user.controller.js";
import { post } from "../models/mockdata.js";

const router = express.Router()

router.get("/", getall)
router.post("/",(req,res) =>{
    res.send(post)
})

export default router