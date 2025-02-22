import React, {useState} from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Heading from "../Heading/heading";
import './experience.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { experienceArray } from "../constant.js/constant";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import airtelInternship from '../../assests/Mehul_Garg_Airtel_Internship_Certificate.pdf'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Experience(){
    const [AirtelInternShipCertificate, setAirtelInternShipCertificate]=useState(false);
    const handleInternshipClick=()=>{
        setAirtelInternShipCertificate(true)
    }
    const handleClose=()=>setAirtelInternShipCertificate(false)

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          {props}
        </Tooltip>
    );

    return(
        <div id="Experience">
            <Heading heading={"__Experience__"} />
            <Modal contentClassName="custom-modal-style" show={AirtelInternShipCertificate} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Internship Certificate</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <embed src={airtelInternship} width="100%" height="100%" type="application/pdf"/>
                </Modal.Body>
            </Modal>
            <VerticalTimeline lineColor="white">
                {
                    experienceArray.map((experience)=>{
                        return(
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'white', color: '#02aab0',  boxShadow: "none"
                            }}
                                contentArrowStyle={{ borderRight: '7px solid  white' }}
                                date={experience.date}
                                iconStyle={{ background: '#02aab0', color: 'white' }}
                                icon={<WorkOutlineIcon />}
                            >

                                <h3 className="title">{experience.companyName}</h3>
                                <h4 className="subtitle">{experience.position}</h4>
                                <p>{experience.workDescription}</p>
                                {
                                    experience.certificate && 
                                        <div className="button1">
                                            <OverlayTrigger
                                                placement="bottom"
                                                className="overlay"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={renderTooltip("Click to view Airtel Internship Certificate")}
                                            > 
                                                <Button className="button" onClick={handleInternshipClick} variant="outline-info">View Certificate</Button>        
                                            </OverlayTrigger>
                                        </div>

                                }
                            </VerticalTimelineElement>
                        )
                    })
                }

                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }} 
                />
            </VerticalTimeline>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        
        </div>
    )
}