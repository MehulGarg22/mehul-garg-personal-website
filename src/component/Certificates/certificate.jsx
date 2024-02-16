import React from "react";
import Heading from "../Heading/heading";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { certificateArray } from "../constant.js/constant";
import './certificate.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Certificate(){

    const certificateLink=(props)=>{
        window.open(props, "_blank")
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          {props}
        </Tooltip>
    );

    return (
        <div id="Certificates">
            <Heading heading={"__Certificate__"}/>
            <Row xs={1} md={2} className="g-4">
                {
                    certificateArray.map((certificate)=>(
                        <Col>
                            <OverlayTrigger
                                placement="top"
                                className="overlay"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip(certificate.description)}
                            >
                                <img className="certificateImage" onClick={()=>certificateLink(certificate.imageLink)} src={certificate.imageSource} alt={certificate.imageAlt}/>
                            </OverlayTrigger>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}