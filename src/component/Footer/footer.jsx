import React from "react";
import Button from 'react-bootstrap/Button';
import './footer.css';
import { footerArray } from "../constant.js/constant";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Footer(){

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          {props}
        </Tooltip>
    );

    return(
        <div id="footer">
            <a href="#top" className="uparrow">
                <OverlayTrigger
                    placement="top"
                    className="overlay"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("Go to top")}
                >
                    <i class="fa fa-angle-up fa-2x" aria-hidden="true"></i>
                </OverlayTrigger>
            </a>
            <div className="footerIcons">
                {
                    footerArray.map((socialMediaIcons)=>{
                        return(
                            <a className="icons"  href={socialMediaIcons.imageLink} target="_blank">
                                <OverlayTrigger
                                    placement="top"
                                    className="overlay"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip(socialMediaIcons.descirption)}
                                >

                                    <i class={socialMediaIcons.imageSource}></i>
                                </OverlayTrigger>
                            </a>
                        )
                        

                    })
                }
            </div>
            <hr className="hr" />
            <p className="developBy">
                © {(new Date().getFullYear())}- Developed by <a href="https://www.linkedin.com/in/mehulgarg22/" className="developText" target="_blank">Mehul Garg</a>
            </p>
            
        </div>
    );
}