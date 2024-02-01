import "./styles.css";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

const StudentInfo = ({ student }) => {
    const navigate = useNavigate();
    const {state} = useLocation();
    const { name, age, date_of_birth, city, grades } = state; // Read values passed on state

  return (
    <>
    <div className="student-info-container">
      <div className="property-container">
        <span className="label">Name:</span> {name}
      </div>
      <div className="property-container">
        <span className="label">Age:</span> {age}
      </div>
      <div className="property-container">
        <span className="label">Date of Birth:</span> {date_of_birth}
      </div>
      <div className="property-container">
        <span className="label">City:</span> {city}
      </div>
      <div className="property-container">
        <span className="label">Grades:</span>
        <div className="grades-container">
          {Object.entries(grades).map(([subject, grade]) => (
            <div className="grade" key={subject}>
              <span className="label">{subject}:</span> {grade}
            </div>
          ))}
        </div>
      </div>
      <Button className="student-info-button" variant="contained" color="primary" onClick={() =>  navigate('/')}>
        Go to Home
    </Button>
    </div>    
    </>
  );
};

export default StudentInfo;