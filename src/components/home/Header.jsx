import { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import headerImg from '../../assets/img/header-img.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { GetContext } from '../../contexts/getContext';
import { IoLocationSharp } from "react-icons/io5";
import TypingOverlay from './TypingOverlay';

const Header = () => {
  const { esp } = useContext(GetContext)

  return (
    <section className='banner' id='header'>
      <Container className='pt-4'>
      <div className='headerBackground rounded-3 p-4'>
        <Row className=' flex justify-content-end align-items-center'>
          <Col xs={12} lg={8} xl={7}>
            <TrackVisibility>
            {({isVisible})=>
              <div className={isVisible ? "animate__animated animate__fadeIn":""}>
                <span className='tagline px-3'>{esp ? 'Bienvenid@ a mi portafolio': 'Welcome to my portfolio'}</span>
                <p className='px-3 nameText mb-0 mb-1'>{esp ? 'Soy':'I am'} Millaray Painemil Herrera</p>

                <Row className='devText ps-3 p-0 m-0'>
                  <Col xs={12} className='p-0 m-0 d-display wrap'>
                     <TypingOverlay esp={esp} />
                  </Col>
                </Row>

                <p className='headerSubtext px-3 my-1'>{esp ? 'Con una formación base en Nutrición, desarrollo una mirada analítica, crítica y empática para abordar y resolver problemas. Me especializo en ciberseguridad y calidad, aplicando testing funcional, automatizado y validación manual. Participo en todo el ciclo de desarrollo con un enfoque de tester, priorizando la creación de soluciones seguras, eficientes y sostenibles. Me motiva el aprendizaje continuo y los desafíos que impulsan mi crecimiento profesional y técnico.':'With a background in Nutrition, I bring an analytical, critical, and empathetic perspective to problem-solving. I specialize in cybersecurity and quality, applying functional testing, automation, and manual validation. I contribute throughout the development cycle with a tester’s mindset, focusing on building secure, efficient, and sustainable solutions. Continuous learning and challenges that drive my professional and technical growth keep me motivated.'}</p>
                <div className='d-flex headerSubtext px-3 py-1'>
                  <IoLocationSharp size={23}/> <p> Santiago, Chile</p>
                </div>
                
              </div>
            }
            </TrackVisibility>
          </Col>
          <Col xs={12} lg={4} xl={5} className='d-flex justify-content-center align-items-center'>
            <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <Image src={headerImg} className='photoHeader' roundedCircle alt="Header Img"/>
                  </div>}
              </TrackVisibility>
          </Col>    
        </Row>
        </div>
      </Container>
    </section>
  )
}

export default Header
