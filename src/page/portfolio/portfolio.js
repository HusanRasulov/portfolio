import React, { useEffect, useState } from 'react'
import request from '../../config/request'
import Loader from '../../components/Loader/loader'
import Hamkorbank from '../../assets/img/paul.jpg'
import Dashboard from '../../assets/img/shift.jpg'
import WebEscuella from '../../assets/img/webescuella.jpg'
import Gym from '../../assets/img/gym.jpg'
import Mawad from '../../assets/img/mawad.jpg'
import './style.css'

function PortFolio() {
  const [projects, setProject] = useState([])
  const [loading, setLoading] = useState(false)

  return loading ? (
    <Loader />
  ) : (
    <div className={'project'}>
      <h1 className={'skills-text'} id={'skills-text-1'}>
        {' '}
        PROJECT{' '}
      </h1>

      <div className="project-block">
        <div className="project-box-2" id={'float'}>
          <div className="project-img-block">
            <div className="project-img-back"> </div>
            <div className="project-img-front">
              <img src={Dashboard} alt="" />
            </div>
          </div>
        </div>
        <div className="project-box-1">
          <div className="project-text">
            <p> Husan Rasulov</p>
            <h1>Admin Dashboard</h1>
            <a
              href="https://gowithshift.com/"
              target={'_blank'}
              title={'Admin Dashboard'}
            >
              Check This Project <i className="bi bi-arrow-right"> </i>
            </a>
          </div>
        </div>
      </div>

      <div className="project-block">
        <div className="project-box-1" id="box_block">
          <div className="project-text">
            <p>Husan Rasulov</p>
            <h1>Platform for hospitals in Germany</h1>
            <a
              href="http://paul-solutions.de"
              target={'_blank'}
              title={'Platform for hospitals in Germany'}
            >
              Check This Project <i className="bi bi-arrow-right"> </i>
            </a>
          </div>
        </div>
        <div className="project-box-2">
          <div className="project-img-block">
            <div className="project-img-back"> </div>
            <div className="project-img-front">
              <img src={Hamkorbank} alt="" />
            </div>
          </div>
        </div>
        <div className="project-box-1" id="box_none">
          <div className="project-text">
            <p>Husan Rasulov</p>
            <h1>
              Document workflow management platform for hospitals in Germany
            </h1>
            <a
              href="https://credit-calculate.netlify.app/"
              target={'_blank'}
              title={'Platform for hospitals in Germany'}
            >
              Check This Project <i className="bi bi-arrow-right"> </i>
            </a>
          </div>
        </div>
      </div>

      <div className="project-block">
        <div className="project-box-2" id={'float'}>
          <div className="project-img-block">
            <div className="project-img-back"> </div>
            <div className="project-img-front">
              <img src={WebEscuella} alt="" />
            </div>
          </div>
        </div>
        <div className="project-box-1">
          <div className="project-text">
            <p> Husan Rasulov</p>
            <h1>Educational Spanish platform </h1>
            <a
              href="https://escuela-clase.web.app/login"
              target={'_blank'}
              title={'Educational Spanish platform'}
            >
              Check This Project <i className="bi bi-arrow-right"> </i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="project-block">
        <div className="project-box-1" id="box_block">
          <div className="project-text">
            <p>Husan Rasulov</p>
            <h1>GYM EQUIPMENT Platform</h1>
            <a
              href="https://12st.co/menu"
              target={'_blank'}
              title={'GYM EQUIPMENT Platform'}
            >
              Check This Project <i className="bi bi-arrow-right"> </i>
            </a>
          </div>
        </div>
        <div className="project-box-2">
          <div className="project-img-block">
            <div className="project-img-back"></div>
            <div className="project-img-front">
              <img src={Gym} alt="" />
            </div>
          </div>
        </div>

        <div className="project-box-1" id="box_none">
          <div className="project-text">
            <p>Husan Rasulov</p>
            <h1>
              GYM EQUIPMENT Platform
            </h1>
            <a
              href="https://12st.co/menu"
              target={'_blank'}
              title={'GYM EQUIPMENT Platform  '}
            >
              Check This Project <i className="bi bi-arrow-right"> </i>
            </a>
          </div>
        </div>
      </div>

      <div className="project-block">
        <div className="project-box-2" id={'float'}>
          <div className="project-img-block">
            <div className="project-img-back"> </div>
            <div className="project-img-front">
              <img src={Mawad} alt="" />
            </div>
          </div>
        </div>
        <div className="project-box-1">
          <div className="project-text">
            <p> Husan Rasulov</p>
            <h1>Mawad e-commerce website </h1>
            <a
              href="http://ordermawad.com/"
              target={'_blank'}
              title={'Mawad e-commerce website '}
            >
              Check This Project <i className="bi bi-arrow-right"> </i>
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PortFolio
