import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import './project.css'
import TrishulWebsite from '../../asset/Trishulwebsite.png';
import CricketFantasyGame from '../../asset/Cricket Fantasy Game.png';
import Algorithm from '../../asset/AlgoEngg.png';
import StarTroppers from '../../asset/StarTroopers.png';
import Modal from 'react-bootstrap/Modal';
import ColorPicker from '../../asset/Color_Picker.png';
import documentImage from '../../asset/documentation.png';
import Heading from '../Heading/heading';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import {projectArray} from '../constant.js/constant';
import connectcloud from '../../asset/connectcloudblog.png'
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export default function Projects(){
    const [resumePopUp, setResumePopUp]=useState(false);

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          {props}
        </Tooltip>
    );

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
    const cloudConnectBlogsUrlNavigate=()=>{
        window.open(projectArray[5].urlLink, "_blank")  
    }

    const handleResumeClick=()=>{
        setResumePopUp(true)
    }

    return(
        <div id="Projects" className="projects-section">
            <Container fluid>
                <Heading heading={"__Projects__"}/>
                <br/> <br/>
                
                {/* ConnectCloud Blogs Project */}
                <Row className="project-row align-items-center mb-5">
                    <Col xs={12} md={6} lg={5} className="project-image-col">
                        <div className="project-image-container">
                            <img
                                className="project-image img-fluid"
                                src={connectcloud}
                                alt="Connect Cloud Blogs"
                            />
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={7}>
                        <section className="project-content">
                            <h3><strong>ConnectCloud Blogs</strong></h3>
                            <p>A production-grade blogging platform built with <strong>ReactJS</strong> and <strong>AWS Serverless</strong> technologies, enabling secure and scalable blog management with rich UI and cloud integration.</p>

                            <ul className="project-features">
                                <li>
                                Implemented <strong>user registration</strong> with optional <strong>profile image upload</strong> via <strong>presigned URLs</strong> to <strong>Amazon S3</strong>; default image used if not provided.
                                </li>
                                <li>
                                Stored user data in <strong>DynamoDB</strong> using <strong>email as partition key</strong>. Integrated <strong>JWT-based authentication</strong> with 1-hour expiry using <strong>Lambda Layers</strong> and <strong>jsonwebtoken</strong>.
                                </li>
                                <li>
                                Developed <strong>7 AWS Lambda functions</strong> in <strong>Node.js</strong> for <code>signup</code>, <code>signin</code>, <code>createBlog</code>, <code>getBlogs</code>, <code>updateBlog</code>, <code>deleteBlog</code>, and <code>generatePresignedURL</code>, exposed via <strong>API Gateway</strong>.
                                </li>
                                <li>
                                Enabled blog creation with <strong>title</strong>, <strong>description</strong>, and <strong>image upload to S3</strong>. Blogs stored in <strong>DynamoDB</strong> with <code>email</code> as Primary Key and <code>blogId</code> (via <strong>uuid</strong>) as Sort Key.
                                </li>
                                <li>
                                Built responsive UI using <strong>ReactJS</strong> and <strong>Ant Design</strong> including forms, modals, notifications, and dynamic <strong>AntD Table</strong> views.
                                </li>
                                <li>
                                Supported <strong>update</strong> and <strong>delete</strong> blog functionality with confirmation pop-ups and real-time status feedback using Ant Design.
                                </li>
                                <li>
                                Integrated <strong>View Full Blog</strong> button in each table row to render complete blog content.
                                </li>
                                <li>
                                Deployed frontend via <strong>Netlify CI/CD</strong> from GitHub. Backend runs on a fully <strong>stateless, serverless architecture</strong> with <strong>IAM-based access control</strong>.
                                </li>
                            </ul>

                            <p><strong>Impact:</strong> Achieved <strong>100% image upload reliability</strong> and improved blog performance by <strong>40%</strong> with optimized DynamoDB queries.</p>
                        </section>
                        <div className="projectLiveButtonContainer">
                            <Button className="button me-3" onClick={cloudConnectBlogsUrlNavigate} variant="outline-info">See Live</Button>        
                            <a className="documentImage" href="https://drive.google.com/file/d/1LLaYK8b43N7M6OvOiHdl6vEwUfGabtI_/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <img className="documentation-icon" height="40" width="40" src={documentImage} alt="Documentation" />
                            </a>
                        </div>
                    </Col>
                </Row>

                {/* Trishul Techfest Project */}
                <Row className="project-row align-items-center mb-5">
                    <Col xs={12} md={6} lg={5} className="project-image-col order-md-2">
                        <div className="project-image-container">
                            <img className="project-image img-fluid" src={TrishulWebsite} alt="Trishul Techfest" />
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={7} className="order-md-1">
                        <section className="project-content">
                            <h3><strong>Trishul Techfest</strong></h3>
                            <p>An informational tech carnival website for <strong>HNB Garhwal Central University</strong> built with <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>, showcasing the annual flagship technology festival and providing comprehensive event information to users across India.</p>
                            <ul className="project-features">
                                <li>
                                    Built using <strong>pure HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong> without any frameworks, demonstrating fundamental web development skills with <strong>responsive design</strong> and cross-device compatibility.
                                </li>
                                <li>
                                    Implemented <strong>complex JavaScript animations</strong> and <strong>smooth transitions</strong> for enhanced user experience, including interactive elements, DOM manipulation, and dynamic content presentation.
                                </li>
                                <li>
                                    Developed <strong>multi-section informational layout</strong> showcasing the <strong>4th edition</strong> of Trishul tech carnival with <strong>"Journey of Perfection"</strong> theme, event details, and university branding integration.
                                </li>
                                <li>
                                    Created <strong>custom CSS styling</strong> with modern design principles including hover effects, gradient backgrounds, responsive layouts using <strong>flexbox/grid</strong>, and mobile-first approach.
                                </li>
                                <li>
                                    Integrated <strong>external navigation system</strong> using <strong>href tags</strong> linking to <strong>College Fever website</strong> for participant registration, eliminating need for backend database or API integrations.
                                </li>
                                <li>
                                    Built <strong>COVID-19 advisory integration</strong> with JavaScript-powered notification system displaying <strong>government guidelines</strong> and event postponement information for user safety awareness.
                                </li>
                                <li>
                                    Implemented <strong>cross-browser compatibility</strong> and <strong>optimized performance</strong> with efficient vanilla JavaScript, CSS optimization, and minimal external dependencies for fast loading times.
                                </li>
                                <li>
                                    Deployed using <strong>Netlify hosting</strong> with <strong>continuous deployment</strong> from <strong>GitHub repository</strong>, enabling automatic updates, version control, and reliable web delivery.
                                </li>
                            </ul>
                            <p><strong>Impact:</strong> Successfully created an <strong>informational website</strong> as a beginner project, demonstrating fundamental web development skills and providing a platform for <strong>event promotion</strong> and <strong>user information</strong> about the premier tech festival in the Garhwal region.</p>
                        </section>

                        <div className="projectLiveButtonContainer">
                            <Button className="button" onClick={trishulUrlNavigate} variant="outline-info">See Live</Button>        
                        </div>
                    </Col>
                </Row>

                {/* Star Troopers Project */}
                <Row className="project-row align-items-center mb-5">
                    <Col xs={12} md={6} lg={5} className="project-image-col">
                        <div className="project-image-container">
                            <img className="project-image img-fluid" src={StarTroppers} alt="Star Troopers" />
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={7}>
                        <section className="project-content">
                            <h3><strong>Star Troopers</strong></h3>
                            <ul className="project-features">
                                <li>Developed a web-app for searching the desired troop</li>
                                <li>This Web-App uses an API call to retrieve data and display it according to the web-app.</li>
                                <li>It Re-renders data when a troop is searched.</li>
                                <li>Used HTML, CSS, Javascript, Reactjs, npm, JSON, Robohash API.</li>
                            </ul>
                        </section>
                        <div className="projectLiveButtonContainer">
                            <Button className="button" onClick={starTrooperUrlNavigate} variant="outline-info">See Live</Button>        
                        </div>
                    </Col>
                </Row>

                {/* Cricket Fantasy Game Project */}
                <Row className="project-row align-items-center mb-5">
                    <Col xs={12} md={6} lg={5} className="project-image-col order-md-2">
                        <div className="project-image-container">
                            <img className="project-image img-fluid" src={CricketFantasyGame} alt="Cricket Fantasy Game" />
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={7} className="order-md-1">
                        <section className="project-content">
                            <h3><strong>Cricket Fantasy Game</strong></h3>
                            <ul className="project-features">
                                <li>Developed a python application where the user can create a virtual team of real cricket players and score points.</li>
                                <li>Get maximum points to win the tournament.</li>
                                <li>PyQt is used for Graphical User Interface (GUI), Uses SQLite Database for storage and retrieval of data</li>
                                <li>Used Python and Concepts of OOPs for Logics of this application. Used CLI to convert .ui and .db file to .py file.</li>
                            </ul>
                        </section>
                        <div className="projectLiveButtonContainer">
                            <Button className="button" onClick={cricketFantasyUrlNavigate} variant="outline-info">Repository</Button>        
                        </div>
                    </Col>
                </Row>

                {/* Algo Engineering Project */}
                <Row className="project-row align-items-center mb-5">
                    <Col xs={12} md={6} lg={5} className="project-image-col">
                        <div className="project-image-container">
                            <img className="project-image img-fluid" src={Algorithm} alt="Algo Engineering" />
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={7}>
                        <section className="project-content">
                            <h3><strong>Algo_Engineering</strong></h3>
                            <ul className="project-features">
                                <li>Open-source Library of Data Structure and Algorithms.</li>
                                <li>Contains important C++ concepts and solutions to contest on various platforms.</li>
                                <li>C++ Programming Language is used to solve problem.</li>
                            </ul>
                        </section>
                        <div className="projectLiveButtonContainer">
                            <Button className="button" onClick={algoEnggUrlNavigate} variant="outline-info">Repository</Button>        
                        </div>
                    </Col>
                </Row>

                {/* Color Picker Project */}
                <Row className="project-row align-items-center mb-5">
                    <Col xs={12} md={6} lg={5} className="project-image-col order-md-2">
                        <div className="project-image-container">
                            <img className="project-image img-fluid" src={ColorPicker} alt="Color Picker" />
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={7} className="order-md-1">
                        <section className="project-content">
                            <h3><strong>Colour Picker</strong></h3>
                            <ul className="project-features">
                                <li>Developed a Colour Code Generator.</li>
                                <li>Generates RGB Code and Hex code for the selected combination of colours.</li>
                                <li>Useful for web developer to generate colour code for their website.</li>
                                <li>HTML, CSS, Javascript is used for Development.</li>
                            </ul>
                        </section>
                        <div className="projectLiveButtonContainer">
                            <Button className="button" onClick={colorPickerUrlNavigate} variant="outline-info">See Live</Button>        
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}