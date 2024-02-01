import studentData from "../static/data";
import HomePage from "./Homepage";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import StudentInfo from "./StudentInfo";


// const findStudentByName = () => studentData.find((student) => student.name === name);

export default function Home() {
    return (
        <BrowserRouter>
         <Routes>
            <Route path='/' element={<HomePage studentData={studentData} />} />
            <Route path='/student/:name' element={<StudentInfo />} />
        </Routes>        
      </BrowserRouter>
    );
  }