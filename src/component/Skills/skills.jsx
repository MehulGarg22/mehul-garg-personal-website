import React from "react";
import Heading from "../Heading/heading";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './skills.css';
import c from '../../assests/C.png';
import cplus from '../../assests/C++.png';
import python from '../../assests/Python.png';
import sql from '../../assests/SQL.png';
import js from '../../assests/JS.png';

export default function Skills(){
    return(
        <div className="skillContainer">
            <Heading heading={"__Skills__"} />
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card>
                        
                        <Card.Body>
                        <Card.Title className="titleText"> Programming Languages</Card.Title>
                        <Card.Text>
                            <img className="images" src={c} alt="C Programming"/>    
                            <img className="images"  src={cplus} alt="C++"/>
                            <img className="images"  src={python} alt="HTML5"/>
                            <img className="images"  src="../../assests/CSS3.png" alt="CSS3"/>
                            <img className="images"  src="../../assests/JS.png" alt="JS"/>
                            <img className="images"  src="../../assests/Python.png" alt="Python"/>
                            <img className="images"  src="../../assests/SQL.png" alt="SQL"/>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        
                        <Card.Body>
                        <Card.Title className="titleText"> Frameworks</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br/>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card>
                        
                        <Card.Body>
                        <Card.Title className="titleText"> Databases</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        
                        <Card.Body>
                        <Card.Title className="titleText"> Developer Tools</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br/>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card>
                        
                        <Card.Body>
                        <Card.Title className="titleText"> AWS Services</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}