import { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import headerImg from '../../assets/img/header-img.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { GetContext } from '../../contexts/getContext';
import { IoLocationSharp } from "react-icons/io5";

const Header = () => {
  const { esp } = useContext(GetContext)
  const [loopNum,setLoopNum]=useState(0);
  const [isDeleting, setIsDeleting]=useState(false);
  const toRotate_esp = ["Desarrolladora _FullStack","QA _Tester", "QA _Automation", "Desarrolladora _Frontend", "Desarrolladora _Backend"]
  const toRotate = ["FullStack _Developer","QA _Tester", "QA _Automation", "Frontend _Developer", "Backend _Developer"]
  const [text,setText]=useState('');
  const [delta,setDelta]=useState(200 - Math.random() * 100);
  const [index,setIndex]= useState(1)
  const period = 2000;


  useEffect(()=>{
    let ticker=setInterval(() => {
      tick();
    },delta);

    return () => { clearInterval(ticker) };
  },[text])

  const tick = () => {
  let i = loopNum % (esp ? toRotate_esp.length : toRotate.length);
  let fullText = esp ? toRotate_esp[i] : toRotate[i];
  let updatedText = isDeleting
    ? fullText.substring(0, text.length - 1)
    : fullText.substring(0, text.length + 1);

  setText(updatedText === '' ? '_' : updatedText);

  if (isDeleting) {
    setDelta(prevDelta => prevDelta / 2);
  }

  if (!isDeleting && updatedText === fullText) {
    setIsDeleting(true);
    setIndex(prevIndex => prevIndex - 2);
    setDelta(period);
  } else if (isDeleting && updatedText === '') {
    setIsDeleting(false);
    setLoopNum(loopNum + 1);
    setIndex(1);
    setDelta(200);
  } else {
    setIndex(prevIndex => prevIndex + 1);
  }
};



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
                <p className='px-3 nameText'>{esp ? 'Soy':'I am'} Millaray Painemil Herrera</p>
                  {/* {esp ?
                  <Row className='devText ps-3 p-0 m-0'> */}
                  {/* <Col xs={12} sm={7} md={5} lg={6} xl={5} xxl={5} className='p-0 m-0'>
                    <p>Desarrolladora_</p>
                  </Col> */}
                   {/* <Col xs={12} sm={5} md={6}  className='p-0 ps-1 m-0'>
                    <p><span className='wrap'>{isVisible ? `${text}`:null}</span></p>
                  </Col>
                  </Row>
                  : */}
                  <Row className='devText ps-3 p-0 m-0'>
                   <Col xs={12} className='p-0 ps-1 m-0 d-display'>
                    <p> <span className='wrap'> {isVisible ? `${text}`:null}</span></p>
                    </Col>
                    {/* <Col xs={12} sm={4} md={3}  className='p-0 m-0'>
                    <p>_Developer</p>
                    </Col> */}
                  </Row>
                  {/* } */}
                <p className='headerSubtext px-3'>{esp ? 'Soy desarrolladora Fullstack con base en Nutrición, lo que me aporta una mirada analítica, crítica y empática para resolver problemas. Me especializo en ciberseguridad y calidad, aplicando principios de testing funcional, automatizado y validación manual. Aporto una visión de tester durante todo el ciclo de desarrollo, enfocándome en crear soluciones seguras, eficientes y sostenibles. Me motiva el aprendizaje continuo y los desafíos que impulsen mi crecimiento profesional y técnico.':'I’m a Fullstack Developer with a background in Nutrition, which gives me an analytical, critical, and empathetic approach to problem-solving. I specialize in cybersecurity and quality assurance, applying functional testing, automation, and manual validation. I bring a tester’s mindset to the entire development cycle, focusing on building secure, efficient, and sustainable solutions. I’m driven by continuous learning and challenges that foster my technical and professional growth.'}</p>
                <div className='d-flex headerSubtext px-3'>
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
