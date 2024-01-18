import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import './education.css'
import profilePhoto from '../../assests/MehulGargPic.jpg'
import Modal from 'react-bootstrap/Modal';
import mehulResumePdf from '../../assests/Mehul-Garg-Software-Engineer-1.4YoE-Resume.pdf'
import Heading from '../Heading/heading';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Education(){
    const [resumePopUp, setResumePopUp]=useState(false);

    const handleResumeClick=()=>{
        setResumePopUp(true)
    }
    const handleClose=()=>setResumePopUp(false)

    return(
        <div id="Education">
            <br/>
            <Heading heading={"__Education__"}/>
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <span className="heading">B.Tech, Information Technology</span>
                    <p>
                        Hemvati Nandan Bahuguna Garhwal University <br/>
                        (A Central University)<br/>
                        2018-2022
                    </p>
                </Col>
                <Col>
                    <Col>
                        <span className="heading">12th (Senior Secondary Examination)</span>
                        <p>
                            Central Board of Secondary Education <br/>
                            2018
                        </p>
                    </Col>
                </Col>
                <Col>
                    <Col>
                        <span className="heading">10th (Secondary Examination)</span>
                        <p>
                            Central Board of Secondary Education <br/>
                            2016
                        </p>
                    </Col>
                </Col>
            </Row>
        </div>
    );
}