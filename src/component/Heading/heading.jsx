import React from "react";
import './heading.css'
export default function Heading({heading}){
    return(
        <div id="heading">
            <p className="textLine1">{heading}</p>
        </div>
    );
}