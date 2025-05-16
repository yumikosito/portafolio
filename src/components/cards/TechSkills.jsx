import { Col, Container, Row } from 'react-bootstrap'
import { FaBootstrap,FaHtml5, FaCss3Alt,FaReact,FaGitAlt, FaGithub, FaNode } from 'react-icons/fa'
import { SiReactbootstrap, SiAxios, SiJest, SiExpress, SiAdobephotoshop } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoFigma, IoLogoJavascript } from "react-icons/io5";
import { IoLogoWordpress } from "react-icons/io";
import { TbBrandOffice } from "react-icons/tb";

const TechSkills = () => {
  return (
    <div>
      <Container className='my-2 py-3' id='techSkills'>
        <h2>- Tecnologías</h2>
        <Row className='my-2 py-2 ps-4 d-flex'>
    
          <h3>Desarrollo Frontend</h3>
          
          <Row className='justify-content-center px-5 py-2'>
            <Col xs={4} md={3}  xl={2} className='d-flex flex-column justify-content-center align-items-center'>
              <FaHtml5 className='animatedIconHTML' size={60}/>
              <p className='iconTextTech'>Html 5</p>
            </Col>

            <Col xs={4}  md={3}  xl={2} className='d-flex flex-column justify-content-center align-items-center'>
              <FaCss3Alt className='animatedIconCSS' size={60}/>
              <p className='iconTextTech'>CSS 3</p>
            </Col>
            <Col xs={4}  md={3}  xl={2} className='d-flex flex-column justify-content-center align-items-center'>
              <IoLogoJavascript className='animatedIconJavascript' size={60}/>
             <p className='iconTextTech'>JavaScript</p>
            </Col>
            <Col xs={4}  md={3} xl={2} className='d-flex flex-column justify-content-center align-items-center' >
              <FaBootstrap className='animatedIconBootstrap' size={60}/>
              <p className='iconTextTech'>Bootstrap</p>
            </Col>
        
            <Col xs={4}  md={3}  xl={2} className='d-flex flex-column justify-content-center align-items-center'>
              <FaReact className='animatedIconReact' size={60}/>
              <p className='iconTextTech'>React</p>
            </Col>

            <Col xs={4}  md={3}  xl={3} className='d-flex flex-column justify-content-center align-items-center'>
              <IoLogoWordpress className='animatedIconWordpress' size={60}/>
             <p className='iconTextTech'>Wordpress</p>
            </Col>
               <Col xs={4}  md={2} xl={2} className='d-flex flex-column justify-content-center align-items-center'>
              <SiAxios className='animatedIconAxios' size={60}/>
              <p className='iconTextTech'>Axios</p>
            </Col>
            <Col xs={8} md={4}  xl={3} className='d-flex flex-column justify-content-center align-items-center'>
              <SiReactbootstrap className='animatedIconReactB' size={60}/>
             <p className='iconTextTech'>React Bootstrap</p>
            </Col>
          </Row>

          <hr/>
          
          <Row className='d-flex justify-content-between my-4' >
            <Col xs={12} sm={3}>
              <h3>Desarrollo Backend</h3>
              <Row  className='d-flex justify-content-around'>
                <Col xs={4} sm={3} md={3} lg={1} className='d-flex flex-column justify-content-center align-items-center'>
                  <FaNode className='animatedIconNode' size={60}/>
                  <p className='iconTextTech'>Node.js</p>
                </Col>
                <Col xs={4} sm={3} md={3} lg={1} className='d-flex flex-column justify-content-center align-items-center'>
                  <SiExpress className='animatedIconExpress' size={60}/>
                  <p className='iconTextTech'>Express.js</p>
                </Col>
              </Row>
          
           
            </Col>
            <Col xs={6} sm={3} className='d-flex flex-column justify-content-center align-items-center' >
              <h3>Testing</h3>
                <SiJest className='animatedIconJest' size={60}/>
                  <p className='iconTextTech'>Jest</p>
            </Col>
            <Col xs={6} sm={3} className='d-flex flex-column justify-content-center align-items-center'>
              <h3> Bases de datos</h3>
                <BiLogoPostgresql className='animatedIconPostgreSQL' size={60}/>
                <p className='iconTextTech'>PostgreSQL</p>
            </Col>
          </Row>
        <hr/>
      
        <Row  className='d-flex justify-content-between mb-4'>
          <Col xs={12} sm={3}>
            <h3>Ofimática</h3>
             <Row className='d-flex justify-content-around'>
                <Col xs={4} sm={3} md={3} lg={1} className='d-flex flex-column justify-content-center align-items-center'>
                  <TbBrandOffice className='animatedIconMicrosoft' size={60}/>
                  <p className='iconTextTech'>Microsoft Office</p>
                </Col>
                <Col xs={4} sm={3} md={3} lg={1} className='d-flex flex-column justify-content-center align-items-center'>
                  <SiAdobephotoshop className='animatedIconPhotoshop' size={60}/>
                  <p className='iconTextTech'>Photoshop</p>
                </Col>
              </Row>
            
          </Col>
          <Col xs={12} sm={3} className='d-flex flex-column justify-content-center align-items-center'>
           <h3>Herramientas</h3>
              <Row className='d-flex justify-content-around'>
                <Col xs={4} sm={3} md={3} lg={1} className='d-flex flex-column justify-content-center align-items-center'>
                  <FaGitAlt className='animatedIconGit' size={60}/>
                  <p className='iconTextTech'>Git</p>
                </Col>
                <Col xs={4} sm={3} md={3} lg={1} className='d-flex flex-column justify-content-center align-items-center'>
                  <FaGithub className='animatedIconGithub' size={60}/>
                  <p className='iconTextTech'>Github</p>
                </Col>
              </Row>
            
          </Col>
          <Col xs={12} sm={3} className='d-flex flex-column justify-content-center align-items-center'>    
          <h3>Diseño UX/UI</h3>
            <IoLogoFigma className='animatedIconFigma' size={60}/>
            <p className='iconTextTech'>Figma</p>
          </Col>
        </Row>
        </Row>
        </Container>
      
    </div>
  )
}

export default TechSkills
