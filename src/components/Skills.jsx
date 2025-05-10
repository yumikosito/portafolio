
import { Col, Container, ProgressBar, Row } from 'react-bootstrap'
import { FaBootstrap,FaHtml5, FaCss3Alt,FaReact,FaGitAlt, FaGithub, FaNodeJs } from 'react-icons/fa'
import { TiHtml5 } from 'react-icons/ti'
import { SiReactbootstrap, SiAxios, SiJest, SiExpress, SiAdobephotoshop } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoFigma, IoLogoJavascript } from "react-icons/io5";
import { IoLogoWordpress } from "react-icons/io";
import { PiMicrosoftWordLogoFill } from "react-icons/pi";

const Skills = () => {
  return (
    <div>
      <Container className='my-2 py-3'>
        <h1>Tecnologías</h1>
        <Row className='my-2 py-2 ps-4 d-flex'>
    
          <h3>Desarrollo Frontend</h3>
          
          <Row className='justify-content-between px-5 py-2'>
            <Col xs={4} sm={3} md={3} lg={1}>
              <FaHtml5 className='animatedIconHTML' size={60}/>
              <p className='iconTextTech'>Html 5</p>
            </Col>

            <Col xs={4} sm={3} md={3} lg={1}>
              <FaCss3Alt className='animatedIconCSS ' size={60}/>
              <p className='iconTextTech'>CSS 3</p>
            </Col>
            <Col xs={4} sm={3} md={3} lg={1}>
              <IoLogoJavascript className='animatedIconJavascript ' size={60}/>
             <p className='iconTextTech'>JavaScript</p>
            </Col>
            <Col xs={4} sm={3} md={3} lg={1} >
              <FaBootstrap className='animatedIconBootstrap ' size={60}/>
              <p className='iconTextTech'>Bootstrap</p>
            </Col>
        
            <Col xs={4} sm={3} md={3} lg={1}>
              <FaReact className='animatedIconReact ' size={60}/>
              <p className='iconTextTech'>React</p>
            </Col>

            <Col xs={4} sm={3} md={3} lg={1}>
              <IoLogoWordpress className='animatedIconWordpress ' size={60}/>
             <p className='iconTextTech'>Wordpress</p>
            </Col>
               <Col xs={4} sm={3} md={3} lg={1}>
              <SiAxios className='animatedIconAxios ' size={60}/>
              <p className='iconTextTech'>Axios</p>
            </Col>
            <Col xs={8} sm={3} md={3} lg={1}>
              <SiReactbootstrap className='animatedIconReactB ' size={60}/>
             <p className='iconTextTech'>React Bootstrap</p>
            </Col>
        
         
          </Row>
          
          <Row>
            <Col>
              <h3>Desarrollo Backend</h3>
                <FaNodeJs/>
                <SiExpress/>
            </Col>
            <Col>
              <h3>Testing</h3>
               <SiJest/>
            </Col>
            <Col>
              <h3> Bases de datos</h3>
              <BiLogoPostgresql/></Col>
          </Row>

      
        <Row>
          <Col>
            <h3>Ofimática</h3>
              <PiMicrosoftWordLogoFill/>
              <SiAdobephotoshop/>
          </Col>
          <Col>
           <h3>Herramientas</h3>
            <FaGitAlt/>
            <FaGithub/>
          </Col>
          <Col>    
          <h3>Diseño UX/UI</h3>
            <IoLogoFigma/>
          </Col>
        </Row>
         
      
         
          <h1>Idiomas</h1>
            <p>Español</p>
            <ProgressBar animated striped variant="success" now={100} />
            <p>Inglés</p>
            <ProgressBar animated striped variant="info" now={85} />
            <p>Japonés</p>
            <ProgressBar animated striped variant="warning" now={15} />

        </Row>
   
      </Container>
    </div>
  )
}

export default Skills
