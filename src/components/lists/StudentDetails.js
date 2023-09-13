import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function StudentDetails() {

    const { rollNo } = useParams();
    const [studentData, setStudentData] = useState({});
  
    useEffect(() => {
      // Make a GET request to fetch the data for the specific student based on roll number
      axios
        .get(`http://localhost:9595/api/students?rollNo=${rollNo}`)
        .then((response) => {
          setStudentData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching student data:", error);
        });
    }, [rollNo]);
  

  return (
    <div>
    <h2>Student Details</h2>
    <p>Name: {studentData.studentName}</p>
    <p>Roll No: {studentData.rollNo}</p>
    {/* Display other student details here */}
  </div>
  )
}

export default StudentDetails
