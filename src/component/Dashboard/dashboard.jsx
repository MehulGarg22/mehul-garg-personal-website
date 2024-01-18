import React from "react";
import NavbarMain from "../navbar/navbar";
import Button from 'react-bootstrap/Button';
import Home from "../Home/home";
import About from '../About/about'
import Skills from "../Skills/skills";
import './dashboard.css'
import Education from "../Education/education";
import Certificate from "../Certificates/certificate";
export default function Dashboard(){

    return(
        <div className="dashboardContainer">
            <NavbarMain/>
            <Home />
            <About />
            <Skills />
            <Education/>
            <Certificate/>
        </div>
    );
}