import { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import headerImg from '../../assets/img/header-img.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Header = () => {
  const [loopNum,setLoopNum]=useState(0);
  const [isDeleting, setIsDeleting]=useState(false);
  const toRotate = ["Frontend", "Backend","FullStack"];
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
      setIndex(prevIndex => prevIndex -2);
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

 

    useEffect(()=>{
      const onScroll = ()=>{
        if(window.scrollY>800){
          setScrolled(true);
        } else{
          setScrolled(false);
        }
      }
      window.addEventListener('scroll',onScroll);
      return ()=>window.removeEventListener('scroll',onScroll)
    },[])

  return (
    <section className='banner' id='header'>
      <Container className='pt-4'>
      <div className='headerBackground rounded-3 p-4'>
        <Row className=' flex justify-content-end align-items-center'>
          <Col xs={12} lg={8} xl={7}>
            <TrackVisibility>
            {({isVisible})=>
              <div className={isVisible ? "animate__animated animate__fadeIn":""}>
                <span className='tagline px-3'>Bienvenid@ a mi portafolio</span>
                <p className='px-3 nameText'>{`Soy Millaray Painemil Herrera`}</p>
                <Row className='devText ps-3 p-0 m-0'>
                  <Col xs={12} sm={6} md={5} xxl={4} className='p-0 m-0'>
                  <p>Desarrolladora</p>
                  </Col>
                  <Col xs={12} sm={6} md={5}  className='p-0 ps-1 m-0'>
                    <p>_<span className='wrap'>{isVisible ? `${text}`:null}</span></p>
                  </Col>
               
                </Row>
                {/* <span className='devText px-1'><span className='wrap'>{'Desarrolladora '}<br/> {''}{isVisible ? `${text}`:null}</span></span></p> */}
                <p className='headerSubtext px-3'>Profesional motivada y expectante de profundizar día a día en el área de la programación. Tengo una gran preocupación de entregar resultados sobresalientes en las tareas que se me encomienden. Además de desafiarme constantemente, con tal de aprender nuevas herramientas profesionales y personales.</p>
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
