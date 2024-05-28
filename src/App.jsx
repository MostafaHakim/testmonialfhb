// src/App.js
import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import Testmonial from './components/Testmonial';
import StudentForm from './components/StundentForm';


const App = () => {
  const testimonialRef = useRef();
  const [studentName, setStudentName] = useState('')
  const [studentGpa, setStudentGpa] = useState('')
  const [studentRoll, setStudentRoll] = useState('')
  const handlePrint = useReactToPrint({
    content: () => testimonialRef.current,
  });

  const handleChangeName = (e) => {
    setStudentName(e.target.value)
  }
  const handleChangeGpa = (e) => {
    setStudentGpa(e.target.value)
  }
  const handleChangeRoll = (e) => {
    setStudentRoll(e.target.value)
  }
  return (
    <div className='grid grid-cols-5 gap-4 items-center justify-center'>
      <div className='col-span-4' ref={testimonialRef}>
        <Testmonial stdName={studentName} stdGpa={studentGpa} stdRoll={studentRoll} />
      </div>
      <div className='col-span-1 bg-sky-400 flex flex-col items-center'>
        <StudentForm stdNameHdl={handleChangeName} stdGpaHdl={handleChangeGpa} stdRollHdl={handleChangeRoll} stdName={studentName} stdGpa={studentGpa} stdRoll={studentRoll} />
        <button className='bg-orange-400 py-2 px-4 hover:bg-orange-600' onClick={handlePrint}>Print</button>
      </div>

    </div>
  );
};

export default App;
