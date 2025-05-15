import React from 'react'
import CertificationCard from '../components/CertificationCard'
import { Container } from 'react-bootstrap'

const Certifications = () => {
  return (
    <div>
      <Container className='my-2 py-3'>
        <h1>Certificaciones</h1>
        <CertificationCard/>
      </Container>
    </div>
  )
}

export default Certifications
