import { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Header = () => {
  const [loopNum,setLoopNum]=useState(0);
  const [isDeleting, setIsDeleting]=useState(false);
  const toRotate = ["Desarrolladora Frontend", "Desarrolladora Backend","Desarrolladora FullStack"];
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

  const tick= () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1): fullText.substring(0, text.length + 1);
    
    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText ===fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex -1);
      setDelta(period);

    } else if (isDeleting && updatedText===''){
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);

    }else {
      setIndex(prevIndex =>prevIndex+1)
    }
  }


  return (
    <section className='banner' id='home'>
      <Container>
      <div className='headerBackground  p-4'>
        <Row className='align-items-center'>
        
          <Col xs={12} md={8} xl={7}>
    
            <TrackVisibility>
          
            {({isVisible})=>
              <div className={isVisible ? "animate__animated animate__fadeIn":""}>
                
                <span className='tagline px-3'>Bienvenid@ a mi portafolio</span>
                <h1 className='px-3'>{`Soy Millaray Painemil `}<br /><span className='txt-rotate px-3'><span className='wrap'>{text}</span></span></h1>
                <p className='headerSubtext px-3'>Profesional motivada y expectante de profundizar día a día en el área de la programación. Tengo una gran preocupación de entregar resultados sobresalientes en las tareas que se me encomienden. Además de desafiarme constantemente, con tal de aprender nuevas herramientas profesionales y personales.</p>
              </div>
        
          
            }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={4} xl={5}>
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
