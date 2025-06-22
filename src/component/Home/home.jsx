import React, { useState } from "react";
import NavbarMain from "../navbar/navbar";
import Button from 'react-bootstrap/Button';
import { homeArray } from "../constant.js/constant";
import './home.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Home() {
    const [isHovering, setIsHovering] = useState(false);

    const renderTooltip = (description) => (
        <Tooltip id="button-tooltip">
            {description}
        </Tooltip>
    );

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const urlNavigate = () => {
        window.location.href = "#About";
    }

    return (
        <div id="home" className="home-container">
            <div className="home-content">
                <div className="hero-section">
                    <div className="text-content">
                        <div className="greeting-text">
                            Hi, my name is 
                            <span className="name-highlight"> Mehul Garg</span>
                        </div>
                        <div className="profession-text">
                            I'm a <span className="profession-highlight">Software Engineer</span>.
                        </div>
                    </div>

                    <div className="social-links-container">
                        <div className="social-links">
                            {homeArray.map((item, index) => (
                                <div key={index} className="social-link-wrapper">
                                    <a 
                                        href={item.socialLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="social-link"
                                    >
                                        <OverlayTrigger
                                            placement="top"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={renderTooltip(item.description)}
                                        >
                                            <div className="social-icon-container">
                                                <img 
                                                    className="social-icon" 
                                                    src={item.imageSource} 
                                                    alt={item.description}
                                                />
                                            </div>
                                        </OverlayTrigger>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="cta-section">
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip("Click to know more about my professional journey")}
                        >
                            <Button 
                                className={`know-more-btn ${isHovering ? 'hovered' : ''}`}
                                onMouseEnter={handleMouseEnter} 
                                onMouseLeave={handleMouseLeave} 
                                onClick={urlNavigate} 
                                variant="outline-primary"
                            >
                                Know More
                            </Button>
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
        </div>
    );
}