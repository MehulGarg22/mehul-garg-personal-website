import React from "react";
import NavbarMain from "../navbar/navbar";
import Button from 'react-bootstrap/Button';
import Home from "../Home/home";
import About from '../About/about'
import Skills from "../Skills/skills";
import './dashboard.css'
import Education from "../Education/education";
import Certificate from "../Certificates/certificate";
import Footer from "../Footer/footer";
import Experience from "../Experience/experience";
import Projects from "../Projects/project";
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-305621958-1";
ReactGA.initialize(TRACKING_ID);

export default function Dashboard(){
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
      }, []);
    
    return(
        <div className="dashboardContainer">
            <NavbarMain/>
            <Home />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education/>
            <Certificate/>
            <Footer/>
        </div>
    );
}