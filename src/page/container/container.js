import React from 'react';
import Skills from "./pages/skills/skill";
import Project from "./pages/projects/project";
import Workflow from "./pages/workflow/workflow";
import Development from "./pages/development/development";
import Body from "./pages/body/body";

function Container() {
    return(
        <div className='container-box'>
            <Body/>
            <div>
                <Skills/>
                <Project/>
                <Workflow/>
                <Development/>
            </div>
        </div>
    )
}

export default Container;