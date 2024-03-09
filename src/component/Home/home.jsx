import React,{useState} from "react";
import NavbarMain from "../navbar/navbar";
import Button from 'react-bootstrap/Button';
import { homeArray } from "../constant.js/constant";
import './home.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import useAnalyticsEventTracker from './useAnalyticsEventTracker';

export default function Home(){
    const [isHovering, setIsHovering] = useState(false);

    const gaEventTracker = useAnalyticsEventTracker('Contact us');

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          {props}
        </Tooltip>
    );
    const handleMouseEnter = () => {
      setIsHovering(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
    };  

    const urlNavigate=()=>{
        window.location.href="#About"
    }
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
                            return<a href={item.socialLink} onClick={()=>gaEventTracker(`${item.description}`)}  target="_blank">
                                    <OverlayTrigger
                                        placement="top"
                                        className="overlay"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip(item.description)}
                                    >
                                        <img className="image" src={item.imageSource} />
                                    </OverlayTrigger>
                                </a>
                            
                            
                            
                        })
                    }
                </div>
                <Button style={{color: isHovering ? 'white' : '#00cdac'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="button" onClick={urlNavigate} variant="outline-info">Know More</Button>        
            </div>
            <br/>
            <br/>
      </div>
    );
}