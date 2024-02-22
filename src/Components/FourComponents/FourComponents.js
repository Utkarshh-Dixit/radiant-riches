import React from 'react';
import './FourComponents.scss';

const FourComponents = () => {
    return (
        <div className="four-components">
            <div className="component">Last Updated- February 22, 2024</div>
            <div className="component">Advertising Disclosure</div>
            <div className="component"></div>
            <div className="component">
                <select>
                    <option value="option1">Top Relevant</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
        </div>
    );
};

export default FourComponents;
