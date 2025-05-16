import React, { useContext, useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ExperienceCard from '../components/ExperienceCard'
import { ExperienceJs } from '../assets/js/experience'
import axios from 'axios'
import { GetContext } from '../contexts/getContext'

const Experience = () => {
  const {exps} = useContext(GetContext)

  
  return (
    <div id='experienceContainer'>
      <Container className='my-2 py-3'>
        <h1>Experiencia</h1>
        <Row className='my-2 py-2 ps-4 d-flex'>
          {exps.map((item, index) =>(
            <Col xs={12} md={6} key={index}>
              <ExperienceCard  {...item}/>
            </Col>
          ))
         
          }
        </Row>
        
      </Container>
    </div>
  )
}

export default Experience
