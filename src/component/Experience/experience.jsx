import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Heading from "../Heading/heading";
import './experience.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { experienceArray } from "../constant.js/constant";

export default function Experience(){
    return(
        <div id="Experience">
            <Heading heading={"__Experience__"} />
            <VerticalTimeline lineColor="white">
                {
                    experienceArray.map((experience)=>{
                        return(
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'white', color: '#02aab0',  boxShadow: "none"
                            }}
                                contentArrowStyle={{ borderRight: '7px solid  white' }}
                                date={experience.date}
                                iconStyle={{ background: '#02aab0', color: 'white' }}
                                icon={<WorkOutlineIcon />}
                            >

                                <h3 className="title">{experience.companyName}</h3>
                                <h4 className="subtitle">{experience.position}</h4>
                                <p>{experience.workDescription}</p>

                            </VerticalTimelineElement>
                        )
                    })
                }

                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }} 
                />
            </VerticalTimeline>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        
        </div>
    )
}