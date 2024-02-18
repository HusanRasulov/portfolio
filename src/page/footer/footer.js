import React from 'react'
import './style.css'
import { Link, useLocation } from 'react-router-dom'

function Footer() {
  const { pathname } = useLocation()

  return (
    <div className={` ${pathname !== '/' ? 'display' : 'footer'} `}>
      <div className="contact">
        <h1> Let's Work Together. </h1>
        <p>
          I promise my response time is faster than your code compiling on a
          Friday afternoon. Well, almost. 😄
        </p>
        <Link to="/contact">
          <button className={'Btn'}> Get In Touch </button>
        </Link>
        <h1 className={'contact-back'}>CONTACT</h1>
      </div>
      <p className={'author'}>
        {' '}
        © {new Date().getFullYear()} Copyright - Rasulov Husan. All
        Rights Reserved{' '}
      </p>
    </div>
  )
}

export default Footer
