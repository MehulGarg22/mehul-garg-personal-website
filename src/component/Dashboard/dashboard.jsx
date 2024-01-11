import React from "react";
import NavbarMain from "../navbar/navbar";
import Button from 'react-bootstrap/Button';
import Home from "../Home/home";
import About from '../About/about'

export default function Dashboard(){

    return(
        <>
            <NavbarMain/>
            <Home />
            <About />
        </>
    );
}