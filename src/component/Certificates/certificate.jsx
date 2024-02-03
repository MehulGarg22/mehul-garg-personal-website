import React from "react";
import Heading from "../Heading/heading";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { certificateArray } from "../constant.js/constant";
import './certificate.css'

export default function Certificate(){

    const certificateLink=(props)=>{
        window.open(props, "_blank")
    }

    return (
        <div id="Certificates">
            <Heading heading={"__Certificate__"}/>
            <Row xs={1} md={2} className="g-4">
                {
                    certificateArray.map((certificate)=>(
                        <Col>
                            <img className="certificateImage" onClick={()=>certificateLink(certificate.imageLink)} src={certificate.imageSource} alt={certificate.imageAlt}/>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}