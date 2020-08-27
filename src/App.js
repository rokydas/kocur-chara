import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Course from './Components/Course/Course';
import EnrolledCourse from './Components/EnrolledCourse/EnrolledCourse';
import fakeData from './fakeData/fakeData.js';
import { useState } from 'react';
import Header from './Components/Header/Header';

function App() {
  // shuffle the array. 
  for (let i = 0; i < fakeData.length; i++) {
    const randomNumber = Math.floor(Math.random() * Math.floor(fakeData.length));
    const temp = fakeData[randomNumber];
    fakeData[randomNumber] = fakeData[i];
    fakeData[i] = temp;
  }

  const [ enroll, setEnroll] = useState([]);

  const enrollCourse = (newCourse) => {
    const newEnroll = [...enroll, newCourse];
    setEnroll(newEnroll);
  }

  return (
    <div>
      <Header></Header>
      <div className="container courses">
        <h4 className="text-center">Get started with these courses</h4>
        {
          fakeData.map(data => <Course enrollCourse={enrollCourse} key={data.id} data={data}></Course>)
        }
      </div>
      <div className="clear"></div>
      <div className="container enrolled">
        <EnrolledCourse enroll={enroll}></EnrolledCourse>
      </div>
    </div>
  );
}

export default App;
