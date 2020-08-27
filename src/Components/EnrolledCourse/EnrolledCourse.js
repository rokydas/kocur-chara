import React from 'react';
import './EnrolledCourse.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const EnrolledCourse = (props) => {
    const enroll = props.enroll;
    // console.log(enroll);
    let totalPrice = 0;
    for(let i = 0; i < enroll.length; i++){
        totalPrice += enroll[i].price;
    }
    
    const vat = (totalPrice * 0.05).toFixed(2);
    const totalPriceWithVat = (totalPrice + parseFloat(vat)).toFixed(2);

    return (
        <div className="container">
            <div className="enrolled-course">
                <h2 className="text-center">Enrolled Courses Details</h2>
                <h4>Number of enrolled courses: {enroll.length}</h4>
                <h4>Item's Price: <span className="taka-icon">৳</span> {totalPrice}</h4>
                <h4>Vat (5%): <span className="taka-icon">৳</span> {vat}</h4>
                <h4>Total Price: <span className="taka-icon">৳</span> {totalPriceWithVat}</h4>
                <button className="checkout">Checkout</button> 
            </div>
        </div>
    );
};

export default EnrolledCourse;