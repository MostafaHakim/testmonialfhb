// src/App.js
import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import Testmonial from './components/Testmonial';


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
    <div className='flex flex-col items-center'>
      <div ref={testimonialRef}>
        <Testmonial stdName={studentName} stdGpa={studentGpa} stdRoll={studentRoll} />
      </div>
      <button className='px-6 py-2 bg-white border-2 border-green-700 rounded-xl hover:bg-gray-400 text-xl' onClick={handlePrint} style={{ margin: '20px', padding: '10px 20px' }}>
        Print
      </button>
      <form>
        <div className='flex flex-col m-8'>
          <label htmlFor="stdName">Full Name</label>
          <input type="text" id='stdName' className='bg-white p-2' value={studentName} onChange={handleChangeName} />
        </div>
        <div className='flex flex-col m-8'>
          <label htmlFor="gpa">GPA</label>
          <input type="text" id='gpa' className='bg-white p-2' value={studentGpa} onChange={handleChangeGpa} />
        </div>
        <div className='flex flex-col m-8'>
          <label htmlFor="roll">Roll No</label>
          <input type="text" id='roll' className='bg-white p-2' value={studentRoll} onChange={handleChangeRoll} />
        </div>
      </form>
    </div>
  );
};

export default App;
