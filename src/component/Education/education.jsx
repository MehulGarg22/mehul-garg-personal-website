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
            <br/>
            <Heading heading={"__Education__"} />
            <VerticalTimeline lineColor="white">
                {
                    educationArray.map((education)=>{
                        return(
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'white', color: '#02aab0', boxShadow:'none' }}
                                contentArrowStyle={{ borderRight: '7px solid  white' }}
                                date={education.date}
                                iconStyle={{ background: '#02aab0', color: 'white' }}
                                icon={<SchoolIcon />}
                                
                            >
                                <h3 className="title">{education?.educationName}</h3>
                                <h4 className="subtitle">
                                    {education.universityOrBoardName}<br/>
                                    {education.universityOrBoardNameNext}
                                </h4>
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



{/* <VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: 'white', color: '#02aab0', border:'1px solid white' }}
contentArrowStyle={{ borderRight: '7px solid  white' }}
date="2017- 2018"
iconStyle={{ background: '#02aab0', color: 'white' }}
icon={<SchoolIcon />}
>
<h3 className="title">12th (Senior Secondary Examination)</h3>
<h4 className="subtitle">Central Board of Secondary Education</h4>
</VerticalTimelineElement>
<VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: 'white', color: '#02aab0', border:'1px solid white' }}
contentArrowStyle={{ borderRight: '7px solid  white' }}
date="2015- 2016"
iconStyle={{ background: '#02aab0', color: 'white' }}
icon={<SchoolIcon />}
>
<h3 className="title">10th (Secondary Examination)</h3>
<h4 className="subtitle">Central Board of Secondary Education</h4>

</VerticalTimelineElement> */}