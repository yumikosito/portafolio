import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import EducationCard from '../components/cards/EducationCard'
import { GetContext } from '../contexts/getContext'

const Education = () => {
  const { edus } = useContext(GetContext)
  
  return (
    <div id='education'>
      <Container className='mt-2 py-2 mb' >
        <h1 className='mt-5'>Educación</h1>
        <Row>
 
        {edus.map((edu,index) =>(
          <Col xs={12} md={6} key={index}>
            <EducationCard {...edu} />
          </Col>
        ))}    
        </Row>
      </Container>
    </div>
  )
}

export default Education
