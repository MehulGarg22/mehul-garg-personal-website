import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import './project.css'
import TrishulWebsite from '../../assests/Trishulwebsite.png';
import CricketFantasyGame from '../../assests/Cricket Fantasy Game.png';
import Algorithm from '../../assests/AlgoEngg.png';
import StarTroppers from '../../assests/StarTroopers.png';
import Modal from 'react-bootstrap/Modal';
import ColorPicker from '../../assests/Color_Picker.png';
import documentImage from '../../assests/documentation.png';
import Heading from '../Heading/heading';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {projectArray} from '../constant.js/constant';

export default function Projects(){
    const [resumePopUp, setResumePopUp]=useState(false);
    // const [isHovering, setIsHovering] = useState(false);

    // const handleMouseEnter = () => {
    //   setIsHovering(true);
    // };
  
    // const handleMouseLeave = () => {
    //   setIsHovering(false);
    // };  

    const trishulUrlNavigate=()=>{
        window.open(projectArray[0].urlLink, "_blank")
    }
    const starTrooperUrlNavigate=()=>{
        window.open(projectArray[1].urlLink, "_blank")
    }
    const cricketFantasyUrlNavigate=()=>{
        window.open(projectArray[2].urlLink, "_blank")
    }
    const algoEnggUrlNavigate=()=>{
        window.open(projectArray[3].urlLink, "_blank")
    }
    const colorPickerUrlNavigate=()=>{
        window.open(projectArray[4].urlLink, "_blank")
    }

    const handleResumeClick=()=>{
        setResumePopUp(true)
    }
    // const handleClose=()=>setResumePopUp(false)

    return(
        <div id="Projects">
            <Heading heading={"__Projects__"}/>
            <br/> <br/>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <img className="projectImages" height="auto" width="250px" src={TrishulWebsite} alt="Profile Image" />
                </Col>
                <Col>
                    <div>
                        <h3 style={{textAlign: 'center', marginTop:'20px', marginBottom:'30px' }}>Trishul "The Tech-Carnival"</h3>
                        <p>
                            • Developed and deployed an official web portal (website) for information reachability and registration. <br/>
                            • Targeting 15,000+ students of Garhwal University, NIT UK and other regional colleges. <br/>
                            • Used HTML, CSS, Bootstrap, Javascript for Responsive UI and seamless interactive UX.
                        </p>
                        <div className="projectLiveButtonContainer">
                            <span>
                                <Button className="button" onClick={trishulUrlNavigate} variant="outline-info">See Live</Button>        
                            </span>
                            {/* <span>
                                <a className="documentImage" onClick={handleResumeClick}>
                                    <img className="projectImages" height="auto" width="250px" src={documentImage} alt="Profile Image" />
                                </a>
                            </span> */}
                        </div>
                    </div>
                </Col>
            </Row>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <img className="projectImages" height="auto" width="250px" src={StarTroppers} alt="Profile Image" />
                </Col>
                <Col>
                    <div>
                        <h3 style={{textAlign: 'center', marginTop:'20px', marginBottom:'30px' }}>Star Troopers</h3>
                        <p>
                            • Developed a web-app for searching the desired troop<br/>
                            • This Web-App uses an API call to retrieve data and display it according to the web-app. <br/>
                            • It Re-renders data when a troop is searched. <br/>
                            • Used HTML, CSS, Javascript, Reactjs, npm, JSON, Robohash API.
                        </p>
                        <div className="projectLiveButtonContainer">
                            <span>
                                <Button className="button" onClick={starTrooperUrlNavigate} variant="outline-info">See Live</Button>        
                            </span>
                            {/* <span>
                                <a className="documentImage" onClick={handleResumeClick}>
                                    <img className="projectImages" height="auto" width="250px" src={documentImage} alt="Profile Image" />
                                </a>
                            </span> */}
                        </div>
                    </div>
                </Col>
            </Row>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <img className="projectImages" height="auto" width="250px" src={CricketFantasyGame} alt="Profile Image" />
                </Col>
                <Col>
                    <div>
                        <h3 style={{textAlign: 'center', marginTop:'20px', marginBottom:'30px' }}> Cricket Fantasy Game</h3>
                        <p>
                            • Developed a python application where the user can  create a virtual team of real cricket players and score points. <br/>
                            • Get maximum points to win the tournament.<br/>
                            • PyQt is used for Graphical User Interface (GUI), Uses SQLite Database for storage and retrieval of data <br/>
                            • Used Python and Concepts of OOPs for Logics of this application. Used CLI to convert .ui and .db file to .py file.<br/>
                        </p>
                        <div className="projectLiveButtonContainer">
                            <span>
                                <Button className="button" onClick={cricketFantasyUrlNavigate} variant="outline-info">Repository</Button>        
                            </span>
                            {/* <span>
                                <a className="documentImage" onClick={handleResumeClick}>
                                    <img className="projectImages" height="auto" width="250px" src={documentImage} alt="Profile Image" />
                                </a>
                            </span> */}
                        </div>
                    </div>
                </Col>
            </Row>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <img className="projectImages" height="auto" width="250px" src={Algorithm} alt="Profile Image" />
                </Col>
                <Col>
                    <div>
                        <h3 style={{textAlign: 'center', marginTop:'20px', marginBottom:'30px' }}>Algo_Engineering</h3>
                        <p>
                            • Open-source Library of Data Structure and Algorithms. <br/>
                            • Contains important C++ concepts and solutions to contest on various platforms. <br/>
                            • C++ Programming Language is used to solve problem.
                        </p>
                        <div className="projectLiveButtonContainer">
                            <span>
                                <Button  className="button" onClick={algoEnggUrlNavigate} variant="outline-info">Repository</Button>        
                            </span>
                            {/* <span>
                                <a className="documentImage" onClick={handleResumeClick}>
                                    <img className="projectImages" height="auto" width="250px" src={documentImage} alt="Profile Image" />
                                </a>
                            </span> */}
                        </div>
                    </div>
                </Col>
            </Row>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <img className="projectImages" height="auto" width="250px" src={ColorPicker} alt="Profile Image" />
                </Col>
                <Col>
                    <div>
                        <h3 style={{textAlign: 'center', marginTop:'20px', marginBottom:'30px' }}>Colour Picker</h3>
                        <p>
                            • Developed a Colour Code Generator. <br/>
                            • Generates RGB Code and Hex code for the selected combination of colours. <br/>
                            • Useful for web developer to generate colour code for their website.<br/>
                            • HTML, CSS, Javascript is used for Development. 
                        </p>
                        <div className="projectLiveButtonContainer">
                            <span>
                                <Button  className="button" onClick={colorPickerUrlNavigate} variant="outline-info">See Live</Button>        
                            </span>
                            {/* <span>
                                <a className="documentImage" onClick={handleResumeClick}>
                                    <img className="projectImages" height="auto" width="250px" src={documentImage} alt="Profile Image" />
                                </a>
                            </span> */}
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}