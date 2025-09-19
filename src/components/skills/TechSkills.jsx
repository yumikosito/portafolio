import { Col, Container, Row } from 'react-bootstrap'
import { FaBootstrap,FaHtml5, FaCss3Alt,FaReact,FaGitAlt, FaGithub, FaNode } from 'react-icons/fa'
import { SiReactbootstrap, SiAxios, SiJest, SiExpress, SiAdobephotoshop, SiCypress, SiSelenium, SiPostman, SiAppium, SiCucumber, SiPytest } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoFigma, IoLogoJavascript } from "react-icons/io5";
import { IoLogoWordpress } from "react-icons/io";
import { TbBrandOffice } from "react-icons/tb";
import { DiScrum } from "react-icons/di";
import { useContext } from 'react';
import { GetContext } from '../../contexts/getContext';
import InProgressSkills from './InProgressSkills';
import PlaywrightIcon from '../../assets/img/playwright.png'
import { TbBrandDjango } from "react-icons/tb";

const TechSkills = () => {
  const { esp } = useContext(GetContext)
  return (
    <div>
      <Container className='my-2 py-3' id='techSkills'>
        <h2>- {esp ?  'Stack Tecnológico':'Tech stack'}</h2>
        <Row className='my-2 py-2 ps-4 d-flex'>

          <h3>Frontend</h3>
          <Row className='justify-content-center py-2'>
            <Col xs={6} md={3}  xl={2} className='d-flex flex-column justify-content-center align-items-center pt-1'>
              <FaHtml5 className='animatedIconHTML' size={60}/>
              <p className='iconTextTech'>Html 5</p>
            </Col>

            <Col xs={6}  md={3}  xl={2} className='d-flex flex-column justify-content-center align-items-center pt-1'>
              <FaCss3Alt className='animatedIconCSS' size={60}/>
              <p className='iconTextTech'>CSS 3</p>
            </Col>
            <Col xs={6}  md={3}  xl={2} className='d-flex flex-column justify-content-center align-items-center pt-1'>
              <IoLogoJavascript className='animatedIconJavascript' size={60}/>
             <p className='iconTextTech'>JavaScript</p>
            </Col>
            <Col xs={6}  md={3} xl={2} className='d-flex flex-column justify-content-center align-items-center pt-1' >
              <FaBootstrap className='animatedIconBootstrap' size={60}/>
              <p className='iconTextTech'>Bootstrap</p>
            </Col>
        
            <Col xs={6}  md={3}  xl={2} className='d-flex flex-column justify-content-center align-items-center pt-1'>
              <FaReact className='animatedIconReact' size={60}/>
              <p className='iconTextTech'>React</p>
            </Col>

            <Col xs={6}  md={3}  xl={3} className='d-flex flex-column justify-content-center align-items-center pt-1'>
              <IoLogoWordpress className='animatedIconWordpress' size={60}/>
             <p className='iconTextTech'>Wordpress</p>
            </Col>
            <Col xs={6}  md={2} xl={2} className='d-flex flex-column justify-content-center align-items-center pt-1'>
              <SiAxios className='animatedIconAxios' size={60}/>
              <p className='iconTextTech'>Axios</p>
            </Col>
            <Col xs={6} md={4}  xl={3} className='d-flex flex-column justify-content-center align-items-center pt-1'>
              <SiReactbootstrap className='animatedIconReactB' size={60}/>
             <p className='iconTextTech'>React Bootstrap</p>
            </Col>
          </Row>

          <hr/>
          
          <Row className='d-flex justify-content-between my-4' >
            <Col xs={12} lg={7} className='my-2'>
              <h3>Backend</h3>
              <Row className='d-flex justify-content-around'>
                <Col xs={6} md={4}  className='d-flex flex-column justify-content-center align-items-center pt-1'>
                  <FaNode className='animatedIconNode' size={60}/>
                  <p className='iconTextTech'>Node.js</p>
                </Col>
                <Col xs={6} md={4}  className='d-flex flex-column justify-content-center align-items-center pt-1'>
                  <SiExpress className='animatedIconExpress' size={60}/>
                  <p className='iconTextTech'>Express.js</p>
                </Col>
                <Col xs={6} md={4} className='d-flex flex-column justify-content-center align-items-center pt-1'>
                  <TbBrandDjango className='animatedIconDjango' size={60}/>
                  <p className='iconTextTech'>Django</p>
                </Col>
              </Row>
            </Col>

             <Col xs={1} className='vr d-none d-lg-block'></Col>

            <Col xs={12} sm={6} lg={4} className='my-2' >
              <h3>{esp ? 'Bases de datos':'Databases'}</h3>
              <Row className='d-flex justify-content-around'>
                <Col xs={12} className='d-flex flex-column justify-content-center align-items-center pt-1'>
                  <BiLogoPostgresql className='animatedIconPostgreSQL' size={60}/>
                  <p className='iconTextTech'>PostgreSQL</p>
                </Col>
              </Row>
            </Col>

          </Row>
          <hr/>
          <Row>
            <Col xs={12} className='my-2' >
              <h3>Testing</h3>
              <Row className='d-flex justify-content-around'> 
                <Col xs={6}  md={3}  xxl={2} className='d-flex flex-column justify-content-center align-items-center pt-1'>
                  <SiCypress className='animatedIconCypress' size={60}/>
                  <p className='iconTextTech'>Cypress</p>
                </Col>
                <Col xs={6}  md={3}  xxl={2} className='d-flex flex-column justify-content-center align-items-center pt-1'>
                  <SiSelenium className='animatedIconSelenium' size={60}/>
                  <p className='iconTextTech'>Selenium</p>
                </Col>
                <Col xs={6}  md={3}  xxl={2} className='d-flex flex-column justify-content-center align-items-center pt-1'>
                  <img src={PlaywrightIcon} className='animatedIconPlaywright' width={70}/>
                  <p className='iconTextTech'>Playwright</p>
                </Col>
                <Col xs={6}  md={3}  xxl={2} className='d-flex flex-column justify-content-center align-items-center pt-1'>
                  <SiPostman className='animatedIconPostman' size={60}/>
                  <p className='iconTextTech'>Postman</p>
                </Col>
                <Col xs={6}  md={3}  xxl={2} className='d-flex flex-column justify-content-center align-items-center pt-1'>
                  <SiAppium className='animatedIconAppium' size={60}/>
                  <p className='iconTextTech'>Appium</p>
                </Col>
                <Col xs={6}  md={3}  xxl={2} className='d-flex flex-column justify-content-center align-items-center pt-1'>
                  <SiCucumber className='animatedIconCucumber' size={60}/>
                  <p className='iconTextTech'>Cucumber</p>
                </Col>
                <Col xs={6}  md={3}  xxl={2} className='d-flex flex-column justify-content-center align-items-center pt-1'>
                  <SiJest className='animatedIconJest' size={60}/>
                  <p className='iconTextTech'>Jest</p>
                </Col>
                <Col xs={6}  md={3}  xxl={2} className='d-flex flex-column justify-content-center align-items-center pt-1'>
                  <SiPytest className='animatedIconPytest' size={60}/>
                  <p className='iconTextTech'>Pytest</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr/>
        
          <Row className='d-flex justify-content-betweem my-4'>
            <Col xs={12} md={6} lg={6} className='my-2'>
              <h3>{esp ? 'Ofimática': 'Office Tools'}</h3>
              <Row className='d-flex justify-content-around'>
                  <Col xs={7} className='d-flex flex-column justify-content-center align-items-center pt-1'>
                    <TbBrandOffice className='animatedIconMicrosoft' size={60}/>
                    <p className='iconTextTech'>Microsoft Office</p>
                  </Col>
                  <Col xs={5} className='d-flex flex-column justify-content-center align-items-center pt-1'>
                    <SiAdobephotoshop className='animatedIconPhotoshop' size={60}/>
                    <p className='iconTextTech'>Photoshop</p>
                  </Col>
                </Row>
            </Col>


           <Col xs={1} className='vr d-none d-lg-block'></Col>

            <Col xs={12} md={6} lg={5} className='my-2'>
            <h3>{esp ? 'Herramientas':'Tools'}</h3>
              <Row className='d-flex justify-content-around'>
                <Col xs={6} className='d-flex flex-column justify-content-center align-items-center pt-1'>
                  <FaGitAlt className='animatedIconGit' size={60}/>
                  <p className='iconTextTech'>Git</p>
                </Col>
                <Col xs={6} className='d-flex flex-column justify-content-center align-items-center pt-1'>
                  <FaGithub className='animatedIconGithub' size={60}/>
                  <p className='iconTextTech'>Github</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} lg={6} className='my-2'>    
              <h3>{esp ? 'Metodologías':'Methodologies'}</h3>
              <Row className='d-flex justify-content-around'>
              
                <Col xs={12} className='d-flex flex-column justify-content-center align-items-center pt-1'>
                  <DiScrum className='animatedIconScrum' size={60}/>
                  <p className='iconTextTech'>Scrum</p>
                </Col>  
              </Row>
            </Col>
            <Col xs={1} className='vr d-none d-lg-block'></Col>

            <Col xs={12} sm={6} lg={5} className='my-2'>    
              <h3>{esp ? 'Diseño UX/UI': 'UX/UI Design'}</h3>
              <Row className='d-flex justify-content-around'>
                <Col xs={12} className='d-flex flex-column justify-content-center align-items-center pt-1'>
                  <IoLogoFigma className='animatedIconFigma' size={60}/>
                  <p className='iconTextTech'>Figma</p>
                </Col>
              </Row>
            </Col>

          </Row>
          <hr/>
          <Row>
            <Col xs={12} className='my-2'>    
              <h3>{esp ? 'Estudiando actualmente':'Currently studying'}</h3>
                <InProgressSkills/>
              </Col>
            </Row>
        </Row>
      </Container>
      
    </div>
  )
}

export default TechSkills
