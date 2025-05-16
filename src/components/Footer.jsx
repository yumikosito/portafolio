import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      <Container fluid expand="lg" sticky="bottom" id='footer' className='px-5 mt-4 py-3'>
        <Row>
          <Col></Col>
          <p className='d-flex justify-content-center align-items-center footerText py-2'>Página creada por Millaray Painemil 2025</p>
        </Row>
      </Container>
      
    </div>
  )
}

export default Footer
