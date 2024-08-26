import React from 'react';
import {useNavigate} from 'react-router-dom';
import succ from "../Assets/success.gif"
import './Success.css';

const Success = () => {

    const navigate = useNavigate();

    const ToHome = () => {
        navigate('/')
        window.scrollTo({ top: 0, behavior: 'smooth' });     
    }
    return (
        <div className="success-page">
            <img src={succ} alt="Success" className="success-gif" />
            <h1>Order Successfully Placed</h1>
            <p>Your order has been placed successfully. Thank you for shopping with us!</p>
            <button onClick={ToHome} className="home-link">Go to Home</button>
        </div>
    );
};

export default Success;
