import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


function Experience() {
    return (
        <div className="experience-section" name="experience">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold ">Experience</p>
                    <p className="py-2">My Education and Work Experience</p>
                </div>
                <VerticalTimeline lineColor="#000000">                    
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="June 2023- July 2023"
                        iconStyle={{ background: "#e9d35b", color: "#fff" }}

                    >
                        <h3 className="vertical-timeline-element-title">
                            Accenture
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Advanced Engineering Intern
                        </h4>
                        <p>Engaged in IRCS-Risk-NA-CrossMU project for the Indian Red Cross Society, aligning with risk management goals. </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="December 2022-May 2023"
                        iconStyle={{ background: "#a9a9a9", color: "#fff" }}

                    >
                        <h3 className="vertical-timeline-element-title">
                            Hellbent Software & Educational Services LLP
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            AI and Machine Learning Intern
                        </h4>
                        <p>Completed 30+ data science tasks</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="November 2022-December 2022"
                        iconStyle={{ background: "#000000", color: "#fff" }}

                    >
                        <h3 className="vertical-timeline-element-title">
                            ASOWin
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Operations Intern
                        </h4>
                        <p>
                            The sole operations intern on the App Optimization team, effectively managing client needs daily.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2020 - Present"
                        iconStyle={{ background: "#e9d35b", color: "#fff" }}

                    >
                        <h3 className="vertical-timeline-element-title">
                            Vellore Institute of Technology, Vellore, Tamil Nadu
                        </h3>

                        <h4 className="vertical-timeline-element-subtitle">
                            Bachelor's Degree
                        </h4>

                        <p>B.Tech in Information Technology</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2018 - 2020"
                        iconStyle={{ background: "#a9a9a9", color: "#fff" }}

                    >
                        <h3 className="vertical-timeline-element-title">
                            Alpine Public School, Banglore, Karnataka
                        </h3>
                        <p>Junior College(CBSE)</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2007 - 2018"
                        iconStyle={{ background: "#000000", color: "#fff" }}

                    >
                        <h3 className="vertical-timeline-element-title">
                            Bethany High School, Banglore, Karnataka
                        </h3>
                        <p>Primary and High School Education(ICSE)</p>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        </div>
    );
}

export default Experience;