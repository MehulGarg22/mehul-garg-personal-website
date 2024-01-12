import React, { useState } from "react";
import NavbarMain from "../navbar/navbar";
import Button from 'react-bootstrap/Button';
import Home from "../Home/home";
import './about.css'
import profilePhoto from '../../assests/MehulGargPic.jpg'
import Modal from 'react-bootstrap/Modal';
import mehulResumePdf from '../../assests/Mehul-Garg-Software-Engineer-1.4YoE-Resume.pdf'

export default function About(){
    const [resumePopUp, setResumePopUp]=useState(false);

    const handleResumeClick=()=>{
        setResumePopUp(true)
    }
    const handleClose=()=>setResumePopUp(false)

    return(
        <div id="About">
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
                            <Button className="button" onClick={handleResumeClick} variant="outline-info">Resume</Button>        
                        </div>
                        <Modal contentClassName="custom-modal-style" show={resumePopUp} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>My Resume</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <embed src={mehulResumePdf} width="100%" height="100%" type="application/pdf"/>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="outline-secondary" onClick={handleClose}>
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal>
                        <div className="button2">
                            <Button className="button" variant="outline-info">Education</Button>        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}