import express from "express";
import { getStundent , createStudent } from "../controller/student.js";
import student from "../models/student.js";

const router = express.Router();

router.get('/', getStundent);
router.post('/', createStudent);

export default router;