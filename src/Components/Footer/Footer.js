import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="column">
                <ul>
                    <li><strong>Categories</strong></li>
                    <li>Web Builder</li>
                    <li>Hosting</li>
                    <li>Data center</li>
                    <li>Robotic Automation</li>
                </ul>
            </div>
            <div className="column">
                <ul>
                    <li><strong>Contact</strong></li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                    <li>Terms of service</li>
                    <li>Categories</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="column">
                <div className="centered-row">
                <select>
                        <option value="option1">United States</option>
                        <option value="option2">Asia</option>
                        <option value="option3">Another </option>
                    </select>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
