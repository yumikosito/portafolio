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

                <p className='headerSubtext px-3 my-1'>{esp ? 'Soy desarrolladora con base en Nutrición, lo que me aporta una mirada analítica, crítica y empática para resolver problemas. Me especializo en ciberseguridad y calidad, aplicando principios de testing funcional, automatizado y validación manual. Aporto una visión de tester durante todo el ciclo de desarrollo, enfocándome en crear soluciones seguras, eficientes y sostenibles. Me motiva el aprendizaje continuo y los desafíos que impulsen mi crecimiento profesional y técnico.':'I’m a developer with a background in Nutrition, which gives me an analytical, critical, and empathetic approach to problem-solving. I specialize in cybersecurity and quality assurance, applying functional testing, automation, and manual validation. I bring a tester’s mindset to the entire development cycle, focusing on building secure, efficient, and sustainable solutions. I’m driven by continuous learning and challenges that foster my technical and professional growth.'}</p>
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
