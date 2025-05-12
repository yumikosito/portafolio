import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ExperienceCard from '../components/ExperienceCard'
import { ExperienceJs } from '../../experience'

const Experience = () => {
  // const [ exp, setExp] = useState([])
  // const getData = async () =>{
  //   const data= await ExperienceJs()
  //   console.log(data);
    
  //     setExp(data)
  // }

  // console.log(exp);
  
  const expRef = useRef();

const scrollToElement = () => {
  const {current} = divRef
   if (current !== null){
     current.scrollIntoView({behavior: "smooth"})
   }
}
  
  return (
    <div id='experienceContainer' ref={expRef}>
      <Container className='my-2 py-3'>
        <h1>Experiencia</h1>
        <Row className='my-2 py-2 ps-4 d-flex'>
          <Col xs={12} md={6}>
            <ExperienceCard/>
          </Col>
          
        </Row>
        
      </Container>
    </div>
  )
}

export default Experience
