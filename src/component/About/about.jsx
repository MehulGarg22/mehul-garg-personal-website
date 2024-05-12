import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import './about.css'
import profilePhoto from '../../assests/MehulGargPic.jpg'
import Modal from 'react-bootstrap/Modal';
import { aboutArray } from "../constant.js/constant";
import Heading from '../Heading/heading';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import mehulResumePdf from '../../assests/Mehul_Garg_Software_Engineer_Fullstack_1.9YoE_Resume.pdf'

export default function About(){
    const [resumePopUp, setResumePopUp]=useState(false);
    const handleResumeClick=()=>{
        setResumePopUp(true)
    }
    const education=(props)=>{
        window.location.href=props
    }
    const handleClose=()=>setResumePopUp(false)
    const download=()=>{
        window.open(aboutArray[0].resumeLink, "_blank")
    }

    const downloadCoverLetter=()=>{
        window.open(aboutArray[0].coverLetterLink, "_blank")
    }

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
      setIsHovering(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
    };  

    return(
        <div id="About">
            <Heading heading={"__About__"}/>
            <div className="aboutContent">
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <img className="aboutImage" height="auto" width="250px" src={profilePhoto} alt="Profile Image" />
                    </Col>
                    <Col>
                        <div>
                            <p>
                                Greetings, digital explorers! I'm a Software Engineer  with a Bachelor of Technology degree from <a href="http://hnbgu.ac.in/" target="_blank" className="textLine3">Hemvati Nandan Bahuguna Garhwal University (A Central University)</a> and with over 1.5+ years of experience in the software industry. In the vast cosmos of 0s and 1s, I've found my calling in developing software that's as innovative as it is efficient. <br/>I am well versed with data structures and algorithms, with a repository of solutions to over 280 challenging questions. I regularly solve questions on platforms like LeetCode and Geeks for Geeks, honing my problem-solving skills and keeping my coding abilities sharp.<br/>
                                My journey has led me to work with an array of technologies including ReactJS, Redux, AWS Lambda, DynamoDB, API Gateway, Amplify, and Cognito, to name a few.
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
                                    <Button style={{backgroundColor: '#00cdac',color: 'white'}} target="_blank" variant="outline-info" onClick={download}>
                                        Download Resume
                                    </Button>
                                    <Button style={{color: isHovering ? 'white' : '#00cdac'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} target="_blank" variant="outline-info" onClick={downloadCoverLetter}>
                                        Cover Letter
                                    </Button>
                                    <Button variant="outline-secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    </Modal.Footer>
                                </Modal>
                                <div className="button2">
                                    <Button className="button" onClick={()=>education("#Education")} variant="outline-info">Education</Button>        
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}