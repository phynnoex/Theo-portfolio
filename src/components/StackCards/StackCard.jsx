import React from 'react';
import './StackCard.css';

export default function StackCard(props) {
    return (
        <div className="stackCard">
            <p className="stackText">{props.stackTitle}</p>
        </div>
    );
}