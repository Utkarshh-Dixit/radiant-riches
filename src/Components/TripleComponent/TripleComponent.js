import React from 'react';
import './TripleComponent.scss';

const TripleComponent = ({ image, buttons, heading, paragraph, texts, buttonText }) => {
    return (
        <div className="triple-component">
            <div className="top">
                <img src={image} alt="Component Image" />
                <div className="buttons">
                    {buttons.map((button, index) => (
                        <button key={index}>{button}</button>
                    ))}
                </div>
            </div>
            <div className="content">
                <h2>{heading}</h2>
                <p>{paragraph}</p>
                <div className="text-components">
                    {texts.map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </div>
            </div>
            <div className="bottom">
                <button>{buttonText}</button>
            </div>
        </div>
    );
};

export default TripleComponent;
