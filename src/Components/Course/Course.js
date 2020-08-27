import React from 'react';
import './Course.css';
import { Card } from 'react-bootstrap';


const Course = (props) => {
    const data = props.data;
    const enrollCourse = props.enrollCourse;
    return (
        <Card className="product-box"> 
            <Card.Img className="product-img" variant="top" src={data.img} />
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text className="price">Price: <span className="taka-icon">৳</span> {data.price}</Card.Text>
                <Card.Text><h5>Instructor: {data.instructor}</h5></Card.Text>
                <Card.Text>{data.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <button onClick={() => enrollCourse(data)} className="enroll-button">Enroll Now</button>
            </Card.Footer>
        </Card>
    );
};

export default Course;