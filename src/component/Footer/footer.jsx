import React from "react";
import './footer.css';
import { footerArray } from "../constant.js/constant";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Footer(){

    const renderTooltip = (text) => (
        <Tooltip id="button-tooltip">
          {text}
        </Tooltip>
    );

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return(
        <footer id="footer">
            <button 
                className="scroll-to-top" 
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <i className="fa fa-angle-up" aria-hidden="true"></i>
            </button>

            <div className="footer-social">
                {
                    footerArray.map((socialMediaIcons, index) => {
                        return(
                            <a 
                                key={index}
                                className="footer-icon-link"  
                                href={socialMediaIcons.imageLink} 
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={socialMediaIcons.descirption}
                            >
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip(socialMediaIcons.descirption)}
                                >
                                    <i className={socialMediaIcons.imageSource}></i>
                                </OverlayTrigger>
                            </a>
                        )
                    })
                }
            </div>

            <div className="footer-divider"></div>

            <p className="footer-credit">
                © {(new Date().getFullYear())} — Designed & Developed by{' '}
                <a 
                    href="https://www.linkedin.com/in/mehulgarg22/" 
                    className="footer-credit-link" 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Mehul Garg
                </a>
            </p>
        </footer>
    );
}