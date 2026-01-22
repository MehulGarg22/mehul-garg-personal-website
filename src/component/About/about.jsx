import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import './about.css';
import profilePhoto from '../../asset/MehulGargPic.jpg';
import Modal from 'react-bootstrap/Modal';
import { aboutArray } from "../constant.js/constant";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import mehulResumePdf from '../../asset/Mehul_Garg_Senior_Software_Engineer_3YoE_Resume.pdf';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


export default function About() {
  const [resumePopUp, setResumePopUp] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleResumeClick = () => setResumePopUp(true);
  const education = (hash) => { window.location.href = hash; };
  const handleClose = () => setResumePopUp(false);

  const download = () => {
    window.open(aboutArray[0].resumeLink, "_blank");
  };

  const downloadCoverLetter = () => {
    window.open(aboutArray[0].coverLetterLink, "_blank");
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const renderTooltip = (text) => (
    <Tooltip id="button-tooltip">{text}</Tooltip>
  );

  return (
    <div id="About" aria-labelledby="about-heading">
      <div className="about-heading">
        <h1 id="about-heading" style={{color:'white'}}>__About Me__</h1>
        <p className="about-subtitle">Secure, scalable, product-focused engineering</p>
      </div>

      <Container fluid className="px-3 px-md-4">
        <div className="aboutContent glass-card">
          <Row className="g-4 align-items-center">
            <Col xs={12} md={5} lg={4} className="text-center">
              <div className="profile-image-container">
                <img
                  className="aboutImage img-fluid shadow-xl"
                  src={profilePhoto}
                  alt="Mehul Garg — Senior Software Engineer"
                  loading="lazy"
                  style={{
                    maxWidth: '260px',
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    aspectRatio: '1 / 1',
                    borderRadius: '20px'
                  }}
                />
              </div>
            </Col>

            <Col xs={12} md={7} lg={8}>
              <div className="about-text-content">
                <p className="lead mb-4">
                  I’m <strong>Mehul Garg</strong> — a Senior Software Engineer and product-minded builder who ships secure, scalable cloud applications with measurable impact. I specialize in modern JavaScript and AWS serverless, turning complex ideas into fast, reliable products that users love and teams can scale.
                </p>

                <p className="mb-4">
                  Over the past 3+ years, I’ve delivered end-to-end features across enterprise AI Cloud platforms at TCS and built production-grade side projects that showcase real-world engineering: reusable UI systems, serverless pricing engines, secure authentication, and AI-enabled experiences. I work best at the intersection of engineering, product strategy, and content—owning outcomes, not just code.
                </p>

                <div className="info-block">
                  <h2 className="block-title">What I’m known for</h2>
                  <ul className="modern-list">
                    <li>Shipping reusable frontends at scale: 45+ React components across 7 projects using Ant Design and Tailwind, improving UI consistency and cutting build time by 40%.</li>
                    <li>Serverless architectures that stay fast under load: 9+ Lambda-backed calculators on API Gateway + DynamoDB, doubling reliability over legacy spreadsheets and enabling 5-year pricing forecasts.</li>
                    <li>Security-first authentication: centralized Cognito + Amplify flows with JWT sessions, reducing auth defects by 90% across mission-critical portals.</li>
                    <li>Document automation: S3 presigned uploads, PDF validation, and Textract pipelines that cut manual entry by 50% and power instant bill previews.</li>
                    <li>AI in production: integrated an Amazon Q chatbot for self-service support, reducing manual tickets by 60%.</li>
                  </ul>
                </div>

                <div className="info-block">
                  <h2 className="block-title">What I’ve built recently</h2>
                  <ul className="modern-list">
                    <li>
                      <strong>ConnectCloud Blogs</strong> — a full-stack blogging platform using React, AWS Lambda, DynamoDB, S3, and Amplify. It features JWT auth, presigned media uploads, optimized DynamoDB access patterns, and Netlify CI/CD—delivering a 40% boost in content operations performance.
                    </li>
                    <li>
                      <strong>CloudXSuite</strong> (in progress) — a credit-card intelligence layer with comparison tables and a personalized chatbot on top of a DynamoDB + Lambda backend, designed to answer user questions contextually and at low cost using AWS free-tier patterns.
                    </li>
                  </ul>
                </div>

                <div className="info-block">
                  <h2 className="block-title">How I work</h2>
                  <ul className="modern-list">
                    <li>Product-first thinking: clarify the problem, define success metrics, and design systems that are simple, observable, and evolvable.</li>
                    <li>Clean abstractions: component libraries, Lambda layers, and consistent API contracts to speed teams up.</li>
                    <li>Data-driven iteration: measure reliability, latency, and usability; optimize where it matters.</li>
                  </ul>
                </div>

                <p className="tech-line">
                  <span className="eyebrow">Tech I use daily</span>
                  React, Redux, TypeScript, Tailwind, Ant Design, Node.js, REST; AWS Lambda, API Gateway, DynamoDB, S3, Cognito, Amplify, IAM; CI/CD with GitHub + Netlify.
                </p>

                <div className="photoTextFlexingButtons d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start">
                  <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={renderTooltip("Click to view my Resume")}>
                    <Button className="btn-neo" onClick={handleResumeClick} size="lg">
                      Resume
                    </Button>
                  </OverlayTrigger>

                  <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={renderTooltip("Click to go to my Education section")}>
                    <Button className="btn-ghost" onClick={() => education("#Education")} size="lg">
                      Education
                    </Button>
                  </OverlayTrigger>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <Modal
        contentClassName="custom-modal-style modal-neo"
        show={resumePopUp}
        onHide={handleClose}
        size="lg"
        centered
        className="resume-modal"
        aria-labelledby="resume-title"
      >
        <Modal.Header closeButton className="modal-header-neo">
          <Modal.Title id="resume-title">My Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0" style={{ height: '70vh' }}>
          <embed
            src={mehulResumePdf}
            width="100%"
            height="100%"
            type="application/pdf"
            className="d-none d-md-block"
          />
          <div className="d-block d-md-none p-3 text-center">
            <p className="mb-3">PDF preview is not available on mobile devices.</p>
            <Button
              variant="primary"
              onClick={download}
              size="lg"
              className="mb-2 btn-neo"
            >
              Download Resume to View
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex flex-column flex-sm-row gap-2 modal-footer-neo">
          <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip("Click to download my resume")}>
            <Button
              className="btn-neo flex-fill flex-sm-grow-0"
              onClick={download}
            >
              Download Resume
            </Button>
          </OverlayTrigger>

          <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip("Click to download cover letter")}>
            <Button
              className={`btn-ghost flex-fill flex-sm-grow-0 ${isHovering ? 'is-hover' : ''}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={downloadCoverLetter}
            >
              Cover Letter
            </Button>
          </OverlayTrigger>

          <Button variant="outline-secondary" onClick={handleClose} className="flex-fill flex-sm-grow-0">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
