import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import './about.css'
import profilePhoto from '../../asset/MehulGargPic.jpg'
import Modal from 'react-bootstrap/Modal';
import { aboutArray } from "../constant.js/constant";
import Heading from '../Heading/heading';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import mehulResumePdf from '../../asset/Mehul_Garg_Software_Engineer_2.9YoE_Resume.pdf'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function About(){
    const [resumePopUp, setResumePopUp]=useState(false);
    const [isHovering, setIsHovering] = useState(false);

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

    const handleMouseEnter = () => {
      setIsHovering(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
    };  
    
    const renderTooltip = (text) => (
        <Tooltip id="button-tooltip">
          {text}
        </Tooltip>
    );

    return(
        <div id="About">
            <div style={{color: 'white', textAlign: 'center', marginBottom: '20px', fontSize:'30px', fontWeight: 'bold', paddingTop: '5px'}}>
                <p>__About__</p>
            </div>
            <Container fluid className="px-3 px-md-4">
                <div className="aboutContent">
                    <Row className="g-4 align-items-center">
                        <Col xs={12} md={6} lg={4} className="text-center">
                            <div className="profile-image-container">
                                <img 
                                    className="aboutImage img-fluid rounded shadow" 
                                    src={profilePhoto} 
                                    alt="Mehul Garg - Software Engineer Profile" 
                                    loading="lazy"
                                    style={{
                                        maxWidth: '250px',
                                        width: '100%',
                                        height: 'auto',
                                        objectFit: 'cover',
                                        aspectRatio: '1/1'
                                    }}
                                />
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={8}>
                            <div className="about-text-content">
                                <p className="lead mb-4">
                                    Greetings, digital explorers! I'm a Software Engineer with a Bachelor of Technology degree from{' '}
                                    <a 
                                        href="http://hnbgu.ac.in/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="textLine3 text-decoration-none"
                                    >
                                        Hemvati Nandan Bahuguna Garhwal University (A Central University)
                                    </a>{' '}
                                    and with over 1.5+ years of experience in the software industry. In the vast cosmos of 0s and 1s, I've found my calling in developing software that's as innovative as it is efficient.
                                </p>
                                <p className="mb-4">
                                    I am well versed with data structures and algorithms, with a repository of solutions to over 280 challenging questions. I regularly solve questions on platforms like LeetCode and Geeks for Geeks, honing my problem-solving skills and keeping my coding abilities sharp.
                                </p>
                                <p className="mb-4">
                                    My journey has led me to work with an array of technologies including ReactJS, Redux, AWS Lambda, DynamoDB, API Gateway, Amplify, and Cognito, to name a few.
                                </p>
                                <div className="photoTextFlexingButtons d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start">
                                    <OverlayTrigger
                                        placement="bottom"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip("Click to view my Resume")}
                                    > 
                                        <Button 
                                            className="button flex-fill flex-sm-grow-0" 
                                            onClick={handleResumeClick} 
                                            variant="outline-info"
                                            size="lg"
                                        >
                                            Resume
                                        </Button>
                                    </OverlayTrigger>        
                                    
                                    <OverlayTrigger
                                        placement="bottom"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip("Click to go to my Education section")}
                                    > 
                                        <Button 
                                            className="button flex-fill flex-sm-grow-0" 
                                            onClick={()=>education("#Education")} 
                                            variant="outline-info"
                                            size="lg"
                                        >
                                            Education
                                        </Button>  
                                    </OverlayTrigger>      
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>

            {/* Resume Modal */}
            <Modal 
                contentClassName="custom-modal-style" 
                show={resumePopUp} 
                onHide={handleClose}
                size="lg"
                centered
                className="resume-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>My Resume</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-0" style={{height: '70vh'}}>
                    <embed 
                        src={mehulResumePdf} 
                        width="100%" 
                        height="100%" 
                        type="application/pdf"
                        className="d-none d-md-block"
                    />
                    <div className="d-block d-md-none p-3 text-center">
                        <p className="mb-3">PDF preview is not available on mobile devices.</p>
                        <Button 
                            variant="primary" 
                            onClick={download}
                            size="lg"
                            className="mb-2"
                        >
                            Download Resume to View
                        </Button>
                    </div>
                </Modal.Body>
                <Modal.Footer className="d-flex flex-column flex-sm-row gap-2">
                    <div className="d-flex flex-column flex-sm-row gap-2 flex-grow-1">
                        <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip("Click to download my resume")}
                        > 
                            <Button 
                                style={{backgroundColor: '#02AAB0', color: 'white', border: 'none'}} 
                                variant="primary" 
                                onClick={download}
                                className="flex-fill flex-sm-grow-0"
                            >
                                Download Resume
                            </Button>
                        </OverlayTrigger>
                        
                        <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip("Click to download cover letter")}
                        > 
                            <Button 
                                style={{
                                    color: isHovering ? 'white' : '#02AAB0',
                                    backgroundColor: isHovering ? '#02AAB0' : 'transparent',
                                    borderColor: '#02AAB0'
                                }} 
                                onMouseEnter={handleMouseEnter} 
                                onMouseLeave={handleMouseLeave} 
                                variant="outline-info" 
                                onClick={downloadCoverLetter}
                                className="flex-fill flex-sm-grow-0"
                            >
                                Cover Letter
                            </Button>
                        </OverlayTrigger>
                    </div>
                    
                    <Button 
                        variant="outline-secondary" 
                        onClick={handleClose}
                        className="flex-fill flex-sm-grow-0"
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}