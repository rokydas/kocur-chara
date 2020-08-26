import React from 'react';
import './Course.css';
import { Card } from 'react-bootstrap';


const Course = (props) => {
    const data = props.data;
    return (
        <Card className="product-box"> 
            <Card.Img className="product-img" variant="top" src={data.img} />
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>{data.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <button className="enroll-button">Enroll Now</button>
            </Card.Footer>
        </Card>
    );
};

export default Course;