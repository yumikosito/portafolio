import React, { useContext } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { GetContext } from '../../contexts/getContext'
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";

import bs4 from '../../assets/img/bs.webp'

const InProgressSkills = () => {
  const { esp } = useContext(GetContext)
  return (
   <div>
      <Container className='my-2 py-3 mx-0' id="ProgressCard">
       {/* <Row>
          <Col xs={12} className='my-2'>    
            <h3>{esp ? 'Estudiando actualmente':'Currently studying'}</h3> */}
            <Row className='d-flex justify-content-around'>
              <Col xs={6} sm={6} md={3} className='d-flex flex-column justify-content-center align-items-center pt-1'>
                <RiTailwindCssFill className='animatedIconTailwind' size={60}/>
                <p className='iconTextTech'>TailwindCSS</p>
              </Col>
              <Col xs={6} sm={6} md={3} className='d-flex flex-column justify-content-center align-items-center pt-1'>
                <FaPython className='animatedIconPython' size={60}/>
                <p className='iconTextTech'>Python</p>
              </Col>
              <Col xs={6} sm={6} md={4} className='d-flex flex-column justify-content-center align-items-center pt-1'>
                <Image src={bs4} className='animatedIconBs4' width={150}/>
                <p className='iconTextTech'>Beautiful Soup</p>
              </Col>
            </Row>

      </Container>
    </div>
  )
}

export default InProgressSkills
