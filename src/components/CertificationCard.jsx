import React from 'react'
import { Accordion, Button, Col, Container, Image, Row } from 'react-bootstrap'

const CertificationCard = (certification) => {
  
  return (
    <div>
      <Container id='certCard' className='my-3'>
        <div className='certContent p-2'>
          <Row>
            <Col xs={3} className='d-flex justify-content-center'>
              <Image className='certImg' src={certification.img}/>
            </Col>
            <Col xs={9} >
            <p>{certification.title}</p>
            <p>{certification.primary_company} | {certification.date}</p>
            <Row className='d-flex justify-content-start'>
              {certification.companys.active ? 
              (certification.companys.names.map((item, index) => (
                <Col key={index} xs={3}>
                <p>{item}</p>
                </Col>
                
              ))

              )

            :null}

            </Row>
            

            <Button>Certificado</Button>
            </Col>
            </Row>
          
        </div>
      </Container>
    </div>
  )
}

export default CertificationCard
