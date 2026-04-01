import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Heading from "../Heading/heading";
import './education.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { educationArray } from "../constant.js/constant";


export default function Education(){
    return(
        <div id="Education">
            <Heading heading={"Education"} />
            <VerticalTimeline lineColor="white">
                {
                    educationArray.map((education, index)=>{
                        return(
                            <VerticalTimelineElement
                                key={index}
                                className="vertical-timeline-element--work"
                                contentStyle={{ 
                                    background: 'white', 
                                    color: '#02aab0', 
                                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                                    borderRadius: '10px',
                                    border: '2px solid rgba(255, 255, 255, 0.2)'
                                }}
                                contentArrowStyle={{ borderRight: '7px solid white' }}
                                date={education.date}
                                dateClassName="timeline-date"
                                iconStyle={{ 
                                    background: '#02aab0', 
                                    color: 'white',
                                    boxShadow: '0 0 20px rgba(2, 170, 176, 0.5)'
                                }}
                                icon={<SchoolIcon />}
                                
                            >
                                <h3 className="title">{education?.educationName}</h3>
                                <h4 className="subtitle">
                                    {education.universityOrBoardName}<br/>
                                    {education.universityOrBoardNameNext}
                                </h4>
                                {education.highlights && (
                                    <ul className="education-highlights">
                                        {education.highlights.map((item, i) => (
                                            <li key={i} className="highlight-item">{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </VerticalTimelineElement>
                        )
                    })
                }


                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }} 
                />
            </VerticalTimeline>
        
        </div>
    )
}