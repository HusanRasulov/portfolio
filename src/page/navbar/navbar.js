import React from 'react';
import {Link} from "react-router-dom";
import ScoderLightLogo from '../../assets/logo/hr.png';
import './style.css';


function Nav() {
    return(
        <div>
            <div className="nav">
                <div className="nav-item-1">
                    <Link to="/" style={{position: 'relative'}}>
                        <img src={ScoderLightLogo} className='nav_global_logo'width={70} alt='scoder logo'/>
                        {/* <h1> <b className={'user-text-1'}></b></h1> */}
                    </Link>
                    <div className={'nav-links'}>
                        <Link to="/portfolio"> Portfolio <span> </span> </Link>
                    </div>
                </div>
                <div className="nav-item-2">
                    <Link to="/contact"><button className={'Btn'} id={'NavBtn'}> Contact Me </button></Link>
                </div>
            </div>
        </div>
    )
}

export default Nav;