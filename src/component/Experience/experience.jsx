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
import airtelInternship from '../../asset/Mehul_Garg_Airtel_Internship_Certificate.pdf'
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
          Click to view Airtel Internship Certificate
        </Tooltip>
    );

    return(
        <div id="Experience" className="experience-container">
            <div className="experience-content">
                <div style={{color: 'white', textAlign: 'center', marginBottom: '20px', fontSize:'30px', fontWeight: 'bold', paddingTop: '5px'}}>
                    <p>__Experience__</p>
                </div>
                
                <Modal 
                    contentClassName="custom-modal-style" 
                    show={AirtelInternShipCertificate} 
                    onHide={handleClose}
                    size="lg"
                    centered
                >
                    <Modal.Header closeButton className="modal-header-custom">
                        <Modal.Title>Airtel Internship Certificate</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modal-body-custom">
                        <div className="pdf-container">
                            <embed 
                                src={airtelInternship} 
                                width="100%" 
                                height="600px" 
                                type="application/pdf"
                                className="pdf-embed"
                            />
                        </div>
                    </Modal.Body>
                </Modal>
                
                <div className="timeline-wrapper">
                    <VerticalTimeline lineColor="rgba(255, 255, 255, 0.8)">
                        {
                            experienceArray.map((experience, index)=>{
                                return(
                                    <VerticalTimelineElement
                                        key={index}
                                        className="vertical-timeline-element--work custom-timeline-element"
                                        contentStyle={{ 
                                            background: 'white', 
                                            color: '#02aab0',  
                                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                                            borderRadius: '10px',
                                            border: '2px solid rgba(255, 255, 255, 0.2)'
                                        }}
                                        contentArrowStyle={{ borderRight: '7px solid white' }}
                                        date={experience.date}
                                        dateClassName="timeline-date"
                                        iconStyle={{ 
                                            background: '#02aab0', 
                                            color: 'white',
                                            boxShadow: '0 0 20px rgba(2, 170, 176, 0.5)'
                                        }}
                                        icon={<WorkOutlineIcon />}
                                    >
                                        <div className="timeline-content">
                                            <h3 className="company-title">{experience.companyName}</h3>
                                            <h4 className="position-subtitle">{experience.position}</h4>
                                            <p className="work-description">{experience.workDescription}</p>
                                            {
                                                experience.certificate && 
                                                    <div className="certificate-button-container">
                                                        <OverlayTrigger
                                                            placement="bottom"
                                                            delay={{ show: 250, hide: 400 }}
                                                            overlay={renderTooltip}
                                                        > 
                                                            <Button 
                                                                className="certificate-button" 
                                                                onClick={handleInternshipClick} 
                                                                variant="outline-info"
                                                            >
                                                                View Certificate
                                                            </Button>        
                                                        </OverlayTrigger>
                                                    </div>
                                            }
                                        </div>
                                    </VerticalTimelineElement>
                                )
                            })
                        }

                        <VerticalTimelineElement
                            iconStyle={{ 
                                background: 'rgb(16, 204, 82)', 
                                color: '#fff',
                                boxShadow: '0 0 20px rgba(16, 204, 82, 0.5)'
                            }} 
                        />
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    )
}