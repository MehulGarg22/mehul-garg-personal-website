import React from "react";
import Heading from "../Heading/heading";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './skills.css';
import { skillsArray } from "../constant.js/constant";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Skills(){

    const renderTooltip = (text) => (
        <Tooltip id="button-tooltip">
          {text}
        </Tooltip>
    );

    return(
        <div id="Skills" className="skillContainer">
            <Heading heading={"__Skills__"} />
            <Container fluid className="px-3 px-md-4">
                <div className="skills-content">
                    <Row xs={1} sm={2} lg={3} xl={4} className="g-4">
                        {
                            skillsArray.map((skills, idx)=>(
                                <Col key={idx}>
                                    <Card className="skill-card h-100">
                                        <Card.Body className="d-flex flex-column">
                                            <Card.Title className="titleText text-center mb-4"> 
                                                {skills.heading}
                                            </Card.Title>
                                            <div className="skills-grid flex-grow-1 d-flex flex-wrap justify-content-center align-items-center gap-3">
                                                {
                                                    skills.programmingLanguage.map((programmingLanguage, langIdx)=>{
                                                        return (
                                                            <div key={langIdx} className="skill-item">
                                                                <OverlayTrigger
                                                                    placement="top"
                                                                    delay={{ show: 250, hide: 400 }}
                                                                    overlay={renderTooltip(programmingLanguage.descirption)}
                                                                >
                                                                    <div className="skill-image-wrapper">
                                                                        <img  
                                                                            className="skill-image" 
                                                                            src={programmingLanguage.image} 
                                                                            alt={programmingLanguage.imageAlt}
                                                                            loading="lazy"
                                                                        />
                                                                    </div>
                                                                </OverlayTrigger>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
}