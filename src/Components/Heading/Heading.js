import React from 'react';
import './Heading.scss';

const Heading = ({ text }) => {
    return (
        <div className="heading">
            <h1>{text}</h1>
        </div>
    );
};

export default Heading;
