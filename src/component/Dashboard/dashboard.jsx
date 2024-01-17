import React from "react";
import NavbarMain from "../navbar/navbar";
import Button from 'react-bootstrap/Button';
import Home from "../Home/home";
import About from '../About/about'
import Skills from "../Skills/skills";
import './dashboard.css'
export default function Dashboard(){

    return(
        <div className="dashboardContainer">
            <NavbarMain/>
            <Home />
            <About />
            <Skills />
        </div>
    );
}