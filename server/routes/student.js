import express from "express";
import { getStundent , createStudent, deleteStudent } from "../controller/student.js";
import student from "../models/student.js";

const router = express.Router();

router.get('/', getStundent);
router.post('/', createStudent);
router.delete('/:id', deleteStudent);


export default router;