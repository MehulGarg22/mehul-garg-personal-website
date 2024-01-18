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
                    <img className="projectImages" height="auto" width="250px" src={profilePhoto} alt="Profile Image" />
                </Col>
                <Col>
                    <div>
                        <p style={{textAlign: 'center' }}>
                            Development in Progress
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}