import StudentModel from "../models/student.js";

export const getStundent = async (req, res) => {
    try {
        const allStudent = await StudentModel.find();
        res.status(200).json(allStudent);
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}

export const createStudent = async (req, res) => {

    const student = req.body;
    const newStudent = new StudentModel(student);

    try {
        await newStudent.save();
        res.status(201).json(newStudent)
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}

export const deleteStudent = async (req, res) => {

    const student = req.params.id;
    try {
        await StudentModel.findByIdAndRemove(student).exec();
        res.send("Deleted");
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}