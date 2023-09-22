import React from 'react';
import  './../styles/buttonStyle.css';

const Button = ({ onClick, text }) => (
    <button class="raised-button" onClick={onClick}>
    {text}
    </button>
)

export default Button;
