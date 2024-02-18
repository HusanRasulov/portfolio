import React from 'react';
import './style.css';

function Loader() {
    return (
        <div className="loading">
            <div className="folding">
                <div className="sk-cube1 sk-cube"></div>
                <div className="sk-cube2 sk-cube"></div>
                <div className="sk-cube4 sk-cube"></div>
                <div className="sk-cube3 sk-cube"></div>
            </div>
        </div>
    )
}

export default Loader;