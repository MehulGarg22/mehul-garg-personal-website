import React, { useState } from "react";
import Heading from "../Heading/heading";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { certificateArray } from "../constant.js/constant";
import './certificate.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Certificate(){
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleCertificateClick = (certificate) => {
        setSelectedCertificate(certificate);
        setShowModal(true);
    }

    const handleExternalLink = (link) => {
        window.open(link, "_blank");
    }

    const handleClose = () => {
        setShowModal(false);
        setSelectedCertificate(null);
    }

    const renderTooltip = (description) => (
        <Tooltip id="certificate-tooltip">
            {description}
        </Tooltip>
    );

    return (
        <div id="Certificates" className="certificate-container">
            <div className="certificate-content">
                <Heading heading={"__Certificates__"}/>
                
                {/* Certificate Modal */}
                <Modal 
                    show={showModal} 
                    onHide={handleClose}
                    size="xl"
                    centered
                    className="certificate-modal"
                    dialogClassName="certificate-modal-dialog"
                >
                    <Modal.Header closeButton className="modal-header-custom">
                        <Modal.Title className="modal-title-custom">
                            {selectedCertificate?.title || 'Certificate'}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modal-body-custom">
                        {selectedCertificate && (
                            <div className="certificate-modal-content">
                                <div className="modal-image-container">
                                    <img 
                                        src={selectedCertificate.imageSource} 
                                        alt={selectedCertificate.imageAlt}
                                        className="modal-certificate-image"
                                    />
                                </div>
                                <div className="certificate-info">
                                    <p className="certificate-description">
                                        {selectedCertificate.description}
                                    </p>
                                    {selectedCertificate.issuer && (
                                        <p className="certificate-issuer">
                                            <strong>Issued by:</strong> {selectedCertificate.issuer}
                                        </p>
                                    )}
                                    {selectedCertificate.date && (
                                        <p className="certificate-date">
                                            <strong>Date:</strong> {selectedCertificate.date}
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}
                    </Modal.Body>
                    <Modal.Footer className="modal-footer-custom">
                        {selectedCertificate?.imageLink && (
                            <Button 
                                variant="outline-primary" 
                                onClick={() => handleExternalLink(selectedCertificate.imageLink)}
                                className="external-link-btn"
                            >
                                View Original
                            </Button>
                        )}
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* Certificates Grid */}
                <div className="certificates-grid">
                    <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-3 g-md-4">
                        {
                            certificateArray.map((certificate, index) => (
                                <Col key={index}>
                                    <div className="certificate-card">
                                        <OverlayTrigger
                                            placement="top"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={renderTooltip(certificate.description)}
                                        >
                                            <div 
                                                className="certificate-image-wrapper"
                                                onClick={() => handleCertificateClick(certificate)}
                                            >
                                                <div className="certificate-image-container">
                                                    <img 
                                                        className="certificate-image" 
                                                        src={certificate.imageSource} 
                                                        alt={certificate.imageAlt}
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div className="certificate-overlay">
                                                    <div className="certificate-overlay-content">
                                                        <div className="view-icon">👁️</div>
                                                        <p className="view-text">Click to View</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </OverlayTrigger>
                                        
                                        {/* Certificate Info */}
                                        <div className="certificate-card-info">
                                            <h5 className="certificate-title">
                                                {certificate.title || certificate.imageAlt}
                                            </h5>
                                            {certificate.issuer && (
                                                <p className="certificate-issuer-small">
                                                    {certificate.issuer}
                                                </p>
                                            )}
                                            {certificate.date && (
                                                <p className="certificate-date-small">
                                                    {certificate.date}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </div>

                {/* Achievement Stats */}
                {certificateArray.length > 0 && (
                    <div className="achievement-stats">
                        <div className="stats-card">
                            <div className="stats-number">{certificateArray.length}</div>
                            <div className="stats-label">Certificates Earned</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}