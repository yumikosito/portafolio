import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ExperienceCard from '../components/ExperienceCard'

const Experience = () => {
  return (
    <div>
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
