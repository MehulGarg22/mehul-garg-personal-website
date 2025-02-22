import React from "react";
import Heading from "../Heading/heading";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './skills.css';
import { skillsArray } from "../constant.js/constant";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Skills(){

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          {props}
        </Tooltip>
    );

    return(
        <div id="Skills" className="skillContainer">
            <br/>
            <Heading heading={"__Skills__"} />
            <br/>
            <br/>
            <Row xs={1} md={2} className="g-4">
                {
                    skillsArray.map((skills, idx)=>(
                        <Col key={idx}>
                            <Card>
                                <Card.Body>
                                <Card.Title className="titleText"> {skills.heading}</Card.Title>
                                    <div style={{display:'flex', marginTop:'20px' ,justifyContent:'space-evenly'}}>

                                        {
                                            skills.programmingLanguage.map((programmingLanguage)=>{
                                                return (
                                                    <Card.Text>
                                                            <OverlayTrigger
                                                                placement="top"
                                                                className="overlay"
                                                                delay={{ show: 250, hide: 400 }}
                                                                overlay={renderTooltip(programmingLanguage.descirption)}
                                                            >
                                                                <img  className="images" src={programmingLanguage.image} alt={programmingLanguage.imageAlt}/>
                                                            </OverlayTrigger>
                                                    </Card.Text>
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
            <br/>
            <br/>
            <br/>

        </div>
    );
}