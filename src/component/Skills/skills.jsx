import React from "react";
import Heading from "../Heading/heading";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './skills.css';
import { skillsArray } from "../constant.js/constant";

export default function Skills(){
    return(
        <div className="skillContainer">
            <Heading heading={"__Skills__"} />
            <Row xs={1} md={2} className="g-4">
                {
                    skillsArray.map((skills, idx)=>(
                        <Col key={idx}>
                            <Card>
                                <Card.Body>
                                <Card.Title className="titleText"> {skills.heading}</Card.Title>
                                    <div style={{display:'flex', justifyContent:'space-evenly'}}>

                                        {
                                            skills.programmingLanguage.map((programmingLanguage)=>{
                                                return (
                                                    <Card.Text>
                                                        <img className="images" src={programmingLanguage.image} alt={programmingLanguage.imageAlt}/>
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
        </div>
    );
}