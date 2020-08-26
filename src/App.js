import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Course from './Components/Course/Course';
import fakeData from './fakeData/course.js';

function App() {
  // shuffle the array. 
  for (let i = 0; i < fakeData.length; i++) {
    const randomNumber = Math.floor(Math.random() * Math.floor(fakeData.length));
    const temp = fakeData[randomNumber];
    fakeData[randomNumber] = fakeData[i];
    fakeData[i] = temp;
  }

  return (
    <div>
      <h1 className="text-center">Welcome to our kocur chara website</h1>
      <h3 className="text-center">An online course platform like Coursera</h3>
      <div className="container courses">
        <h4>Get started with these free courses</h4>
        {
          fakeData.map(data => <Course data={data}></Course>)
        }
        
      </div>
    </div>
  );
}

export default App;
