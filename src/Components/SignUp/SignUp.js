import React from 'react';
import './SignUp.scss';

const SignUp = ({ paragraphText, buttonText }) => {
    return (
        <div className="paragraph-with-button">
            <div className="left">
                <p>{paragraphText}</p>
            </div>
            <div className="right">
                <button>{buttonText}</button>
            </div>
        </div>
    );
};

export default SignUp;
