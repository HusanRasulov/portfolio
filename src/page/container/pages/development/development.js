import React from 'react'
import java from '../../../../assets/lan/icons8-java-480.png'
import spring from '../../../../assets/lan/icons8-spring-boot-480.png'
import postgres from '../../../../assets/lan/icons8-postgres-480.png'
import jwt from '../../../../assets/lan/icons8-jwt-480.png'
import javascript from '../../../../assets/lan/js.png'
import react from '../../../../assets/lan/react.png'
import aws from '../../../../assets/lan/icons8-amazon-web-services-480 (1).png'
import git from '../../../../assets/lan/git.png'
import mysql from '../../../../assets/lan/icons8-mysql-96.png'
import './style.css'

function Development() {
  return (
    <div className={'development'}>
      <h1 className={'dev-text'}> Backend - Developer. </h1>
      <div className="dev-block">
        <div className="dev-box-1">
          <p>What kind of Stack I use?</p>
          <h1> Backend Developer. </h1>
        </div>
        <div className="dev-box-2">
          <p>
            As a backend developer, I prioritize using the latest software and
            platforms in my projects. This ensures that my clients receive
            cutting-edge solutions, benefitting from the most advanced and
            reliable technologies available.
          </p>
        </div>
      </div>
      <div className="lan">
        <img src={java} alt="html" />
        <img src={spring} alt="spring"/>
        <img src={postgres} alt="bootstrap" />
        <img src={mysql} alt="mysql"/>
        <img src={jwt} alt="sass" />
        <img src={aws} alt="redux" />
        <img src={javascript} alt="javascript" />
        <img src={react} alt="react" />
        <img src={git} alt="git" />
      </div>
    </div>
  )
}

export default Development
