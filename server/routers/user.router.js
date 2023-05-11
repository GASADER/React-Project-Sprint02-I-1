import express from "express";
import { getall } from "../controllers/user.controller";

const router = express.Router()

router.get("/", getAll)