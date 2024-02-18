import React from 'react';
import './style.css';

function Skills() {
    return(
        <div className={'skills'}>
            <h1 className={'skills-text'}>SKILLS</h1>
            <div className="skills-block">
                <div className="skill-box-1">
                    <div className="box-block">
                        <div className="box-item">
                            <i className="bi bi-bounding-box"> </i>
                            <h2> Spring-Boot </h2>
                            <p> Proficient in using and customizing Spring Boot starters to streamline application development and reduce boilerplate code.</p>
                        </div>
                        <div className="box-item">
                            <i className="bi bi-layout-wtf"> </i>
                            <h2> SQL Database Expert </h2>
                            <p>Extensive experience in developing networked applications using Java Socket API. </p>
                        </div>
                        <div className="box-item">
                            <i className="bi bi-code-slash"> </i>
                            <h2>RESTful API Architect </h2>
                            <p>Designing resourceful and intuitive API endpoints, following RESTful principles to ensure clarity, simplicity, and ease of use.</p>
                        </div>
                        <div className="box-item">
                            <i className="bi bi-cart4"> </i>
                            <h2>Testing with Spring Boot</h2>
                            <p>Ensuring code reliability through comprehensive testing using tools like JUnit and TestNG, and integrating testing into the continuous integration pipeline.</p>
                        </div>
                    </div>
                </div>
                <div className="skill-box-2">
                    <h1>
                        Why Hire Me For Your Next Project?
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Skills;