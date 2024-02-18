import React from 'react';
import {Link} from "react-router-dom";
import Hamkorbank from '../../../../assets/img/paul.jpg';
import Dashboard from '../../../../assets/img/shift.jpg';
import './style.css';

function Project() {
    return(
        <div className={'project'}>
            <h1 className={'skills-text'} id={'skills-text-1'}> PROJECT </h1>

            <div className="project-block">
                <div className="project-box-2" id={'float'}>
                    <div className="project-img-block">
                        <div className="project-img-back"> </div>
                        <div className="project-img-front">
                            <img src={Dashboard} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="project-box-1">
                    <div className="project-text">
                        <p> Husan Rasulov</p>
                        <h1>Admin Dashboard</h1>
                        <a href="https://gowithshift.com/" target={'_blank'} title={"Admin Dashboard"}>
                            Check This Project <i className="bi bi-arrow-right"> </i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="project-block">
                <div className="project-box-1" id='box_block'>
                    <div className="project-text">
                        <p>Husan Rasulov</p>
                        <h1>Platform for hospitals in Germany</h1>
                        <a href="http://paul-solutions.de" target={'_blank'} title={'Platform for hospitals in Germany'}>
                            Check This Project <i className="bi bi-arrow-right"> </i>
                        </a>
                    </div>
                </div>
                <div className="project-box-2">
                    <div className="project-img-block">
                        <div className="project-img-back"> </div>
                        <div className="project-img-front">
                            <img src={Hamkorbank} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="project-box-1" id='box_none'>
                    <div className="project-text">
                        <p>Husan Rasulov</p>
                        <h1>Document workflow management platform for hospitals in Germany</h1>
                        <a href="https://credit-calculate.netlify.app/" target={'_blank'} title={'Platform for hospitals in Germany'}>
                            Check This Project <i className="bi bi-arrow-right"> </i>
                        </a>
                    </div>
                </div>
            </div>
            <div className={'view-all'}>
                <Link to="/portfolio"><button className={'Btn'}> View All </button></Link>
            </div>
        </div>
    )
}

export default Project;