import React from "react";
import NavbarMain from "../navbar/navbar";
import Button from 'react-bootstrap/Button';
import Home from "../Home/home";
import './about.css'
import profilePhoto from '../../assests/MehulGargPic.jpg'

export default function About(){

    return(
        <div id="aboutContainer">
            <br/>
            <p className="textLine1">ABOUT ME</p>
            <br/>
            <div className="photoTextFlexing">
                <div>
                    <img height="auto" width="300px" src={profilePhoto}
                    alt="Profile Image" />
                </div>
                <div className="textLine4">
                    <p className="textLine2">
                        I am a fourth year engineering undergraduate at <a href="http://hnbgu.ac.in/" target="_blank" className="textLine3">Hemvati Nandan Bahuguna Garhwal University (A Central
                        University)</a>, pursuing Bachelor of Technology in Information Technology. As a student of Information
                        Technology, I am fascinated by the extensive impact
                        computers can have in solving real world problems. I am specially interested in the fields of Design and
                        Analysis of Algorithms and Full Stack Development.
                    </p>
                    <p className="textLine2">
                        Among my other interest, I am fascinated by Economics and particularly in Finance which has some combination of
                        frugality and paranoia.
                    </p>
                    <div className="photoTextFlexingButtons">
                        <div className="button1">
                            <Button className="button" variant="outline-info">Resume</Button>        
                        </div>
                        <div className="button2">
                            <Button className="button" variant="outline-info">Education</Button>        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}