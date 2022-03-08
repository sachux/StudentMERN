import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import useStyle from "../../styles"
import { Button } from '@material-ui/core';
import axios  from "axios";

export default function CreateStudent() {
    const classes = useStyle();

    const [student,  setStudent] = useState({
        regNo : 0,
        studentName: '',
        grade : '',
        section: ''
    });

    const createStudent = () => {
        axios.post('http://localhost:5000/students',student)
    }
  return (
      <>
      <h2> Create Student </h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Reg.NUmber" variant="standard" value={student.regNo} 
        onChange={(event) => {setStudent({...student, regNo: event.target.value}) }}/>
      <TextField id="standard-basic" label="Name" variant="standard" value={student.studentName} 
        onChange={(event) => {setStudent({...student, studentName: event.target.value}) }}/>
      <TextField id="standard-basic" label="Grade" variant="standard" value={student.grade}
        onChange={(event) => {setStudent({...student, grade: event.target.value}) }}/>
      <TextField id="standard-basic" label="Section" variant="standard" value={student.section}
        onChange={(event) => {setStudent({...student, section: event.target.value}) }}/>


      <Button variant='contained' color='primary' onClick={createStudent}>

        Create
      </Button>
    </form>
    </>
  );
}
