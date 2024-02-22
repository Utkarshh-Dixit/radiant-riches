import React from 'react';
import './CustomComponent.scss';

const CustomComponent = ({ faltuim, paragraph, rating, description, stars }) => {
    return (
        <div className="custom-component">
            <div className="left">
                <img src={faltuim} alt="Component" />
            </div>
            <div className="middle">
                <p>{paragraph}</p>
            </div>
            <div className="right">
                <div className="rating">
                    <div className="number">{rating}</div>
                    <span className="description">{description}</span>
                    <div className="stars">{stars}</div>
                    <button>View</button>
                </div>
            </div>
        </div>
    );
};

export default CustomComponent;
