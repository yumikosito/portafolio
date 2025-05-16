import React, { useContext } from 'react'
import CertificationCard from '../components/CertificationCard'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import { GetContext } from '../contexts/getContext'

const Certifications = () => {
  const { certs } = useContext(GetContext)
  return (
    <div>
      <Container className='my-2 py-3'>
        <h1>Certificaciones</h1>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Diplomados</Accordion.Header>
              <Accordion.Body>
                <Row>
                  {certs.map((cert,index) => (
                    (cert.type===1) ? 
                      <Col xs={12} md={6}>
                      <CertificationCard key={index} {...cert}/>
                      </Col>
                    :null
                    )
                  )}
                </Row>
                
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Cursos</Accordion.Header>
              <Accordion.Body>
                 <Row>
                {certs.map((cert,index) => (
                  (cert.type===0) ? 
                    <Col xs={12} md={6}>
                      <CertificationCard key={index} {...cert}/>
                    </Col>
                  :null
                  )
                )}
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
   
      </Container>
    </div>
  )
}

export default Certifications
