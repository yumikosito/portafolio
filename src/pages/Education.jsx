import React from 'react'
import { Container } from 'react-bootstrap'
import EducationCard from '../components/EducationCard'

const Education = () => {
  return (
    <div>
      <Container className='my-2 py-3'>
        <h1>Educación</h1>
        <EducationCard/>
      </Container>
    </div>
  )
}

export default Education
