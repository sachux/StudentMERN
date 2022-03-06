export const getStundent = async (req, res) => {
    res.send("controller working")
    try {
        const allStudent = await student.find();
        res.status(200).json(allStudent);
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}

export const createStudent = async (req, res) => {

    const student = req.body;
    const newStudent = new student(student);

    try {
        await newStudent.save();
        res.status(201).json(newStudent)
    } catch (error) {
        res.status(500).json({error : error.message})
    }

    res.send(" create controller working")

}