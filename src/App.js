import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import './App.css';
import fakeData from './fakeData/fakeData.js';

function App() {
  // shuffle the array. 
  for (let i = 0; i < fakeData.length; i++) {
    const randomNumber = Math.floor(Math.random() * Math.floor(fakeData.length));
    const temp = fakeData[randomNumber];
    fakeData[randomNumber] = fakeData[i];
    fakeData[i] = temp;
  }

  const [enroll, setEnroll] = useState([]);
  const [country, setCountry] = useState({});
  const [properties, setProperties] = useState([]);

  const enrollCourse = (newCourse) => {
    const newEnroll = [...enroll, newCourse];
    setEnroll(newEnroll);
  }

  const showData = (properties) => {
    console.log(properties);
  }

  useEffect(() => {
    fetch('https://covid-api.mmediagroup.fr/v1/cases')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setCountry(data);
        const newProperties = Object.keys(data);
        setProperties(newProperties);
        
      })

  }, [])

  return (
    <div>
      {/* <Header></Header>
      <div className="container courses">
        <h4 className="text-center">Get started with these courses</h4>
        {
          fakeData.map(data => <Course enrollCourse={enrollCourse} key={data.id} data={data}></Course>)
        }
      </div>
      <div className="clear"></div>
      <div className="container enrolled">
        <EnrolledCourse enroll={enroll}></EnrolledCourse>
      </div> */}
      {
        properties && properties.map(prop => <li>{country[prop].All.country}</li>)
      }
    </div>
  );
}

export default App;
