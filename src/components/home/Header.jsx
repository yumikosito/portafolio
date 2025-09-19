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
  const toRotate_esp = ["Desarrolladora_Frontend", "Desarrolladora_Backend","Software_Tester","Desarrolladora_FullStack"]
  const toRotate = ["Frontend_Developer", "Backend_Developer","Software_Tester","FullStack_Developer"]
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
                   <Col xs={12} sm={4} md={3}  xxl={3} className='p-0 ps-1 m-0 d-display'>
                    <p> <span className='wrap'> {isVisible ? `${text}`:null}</span></p>
                    </Col>
                    {/* <Col xs={12} sm={4} md={3}  className='p-0 m-0'>
                    <p>_Developer</p>
                    </Col> */}
                  </Row>
                  {/* } */}
                <p className='headerSubtext px-3'>{esp ? 'Soy una profesional con formación original en Nutrición, lo que me ha otorgado una base sólida en el pensamiento crítico, el análisis de datos y la resolución empática de problemas. Tengo un enfoque particular en la ciberseguridad, con el objetivo de desarrollar aplicaciones seguras, confiables y eficientes. Me caracterizo por mi motivación hacia el aprendizaje constante, capacidad de adaptación y compromiso con la excelencia. Tengo un fuerte enfoque en entregar soluciones funcionales y de alta calidad, enfrentando desafíos que me permitan crecer tanto técnica como profesionalmente.':'I am a professional with an academic background in Nutrition, which has provided me with a solid foundation in critical thinking, data analysis, and empathetic problem-solving. I have a particular focus on cybersecurity, with the goal of developing secure, reliable, and efficient applications. I am known for my motivation for continuous learning, adaptability, and commitment to excellence. I have a strong focus on delivering high-quality, functional solutions, and I thrive on challenges that allow me to grow both technically and professionally.'}</p>
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
