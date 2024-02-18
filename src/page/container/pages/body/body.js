import React from "react";
import { SiUpwork } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { BsTelegram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import Cube from './cube';
import './style.css';

const styles = {
    root: {
        fontFamily: "sans-serif",
        textAlign: "center",
        height: "100%"
    },
    container: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    particlesContainer: {
        position: "absolute"
    }
};

function Body() {
    return(
        <div className={'body'}>
            <div className="content">
                <div className="context-text">
                    <h1> Hello </h1>
                    <h1> I'm <span className={'user-text'}> Husan Rasulov </span>  </h1>
                    <p>
                    Experienced Java Software Engineer specializing in designing and developing efficient and adaptable backend solutions. Proficient in Java, Spring Boot, and various database systems. 
                    </p>
                    <div className={'context-footer'}>
                        <button className={'Btn'}> See My Work </button>
                    </div>
                </div>

                <div className="context-img">
                    <div style={styles.container}>
                        <Cube />
                    </div>
                </div>

            </div>
            <div className="social">
                <a href="https://www.upwork.com/" target={'_blank'}><SiUpwork className={'icons i-1'}/></a>
                <a href="https://t.me/HusenRasulov" target={'_blank'}><BsTelegram className={'icons i-2'}/></a>
                <a href="https://www.instagram.com/" target={'_blank'}><RiInstagramFill className={'icons i-3'}/></a>
                <a href="https://www.facebook.com/" target={'_blank'}><SiFacebook className={'icons i-4'}/></a>
                <a href="https://github.com/HusanRasulov" target={'_blank'}><BsGithub className={'icons i-5'}/></a>
                <a href="https://www.linkedin.com/in/husan-rasulov-403744221/" target={'_blank'}><SiLinkedin className={'icons i-6'}/></a>
            </div>
        </div>
    )
}

export default Body;