import React from "react";
import NavbarMain from "../navbar/navbar";
import Button from 'react-bootstrap/Button';
import { homeArray } from "../constant.js/constant";
import './home.css'

export default function Home(){
    
    return(
        <div id="home">
            <div>
                <div className="textLine1">
                    Hi, my name is <span className="textLine2">Mehul Garg</span>
                    <br />
                    I'm a Software Engineer.
                </div>
                <div className="linkContainer">
                    {
                        homeArray.map((item)=>{
                            return<a href={item.socialLink} target="_blank">
                                <img className="image" src={item.imageSource} />
                            </a>
                        })
                    }
                </div>
                <Button className="button" variant="outline-info">Know More</Button>        
            </div>
      </div>
    );
}