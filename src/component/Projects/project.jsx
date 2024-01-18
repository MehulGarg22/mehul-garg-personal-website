import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import './project.css'
import profilePhoto from '../../assests/MehulGargPic.jpg'
import Modal from 'react-bootstrap/Modal';
import mehulResumePdf from '../../assests/Mehul-Garg-Software-Engineer-1.4YoE-Resume.pdf'
import Heading from '../Heading/heading';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Projects(){
    const [resumePopUp, setResumePopUp]=useState(false);

    const handleResumeClick=()=>{
        setResumePopUp(true)
    }
    const handleClose=()=>setResumePopUp(false)

    return(
        <div id="Projects">
            <Heading heading={"__Projects__"}/>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <img style={{marginTop:'20px', marginLeft:'40%'}} height="auto" width="250px" src={profilePhoto} alt="Profile Image" />
                </Col>
                <Col>
                    <div>
                        <p>
                            Greetings, digital explorers! I'm a Software Engineer  with a Bachelor of Technology degree from <a href="http://hnbgu.ac.in/" target="_blank" className="textLine3">Hemvati Nandan Bahuguna Garhwal University (A Central University)</a> and with over 1.5+ years of experience in the software industry. In the vast cosmos of 0s and 1s, I've found my calling in developing software that's as innovative as it is efficient. <br/>I am well versed with data structures and algorithms, with a repository of solutions to over 280 challenging questions. I regularly solve questions on platforms like LeetCode and Geeks for Geeks, honing my problem-solving skills and keeping my coding abilities sharp.<br/>
                            My journey has led me to work with an array of technologies including ReactJS, Redux, AWS Lambda, DynamoDB, API Gateway, Amplify, and Cognito, to name a few.
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}