import React from 'react'
import { Accordion, Button, Col, Container, Image, Row } from 'react-bootstrap'
import { FcDiploma1 } from "react-icons/fc";

const CertificationCard = (certification) => {
  
  return (
    <div>
      <Container id='certCard' className='my-3'>
        <div className='certContent px-3 py-2' style={{backgroundColor: `${certification.color}`}}>
          <Row>
            <Col xs={12} md={3} lg={12} xl={3} className='d-flex justify-content-center align-items-center'>
              <Image className='certImg' src={certification.img}/>
            </Col>
            <Col xs={12} md={9} lg={12} xl={9} className='ps-3 d-flex flex-column justify-content-center' >
              <p className='m-0 p-0 certTitle'>{certification.title}</p>
     
       
                <p className='m-0 p-0 certPCompany'>{certification.primary_company}</p>
       
                <p className='m-0 p-0 certDate'>{certification.date}</p>
               
              <Row className='d-flex justify-content-between my-1'>
                <Col xs={12} xl={8} >
                <div className='d-flex flex-row justify-content-start'>
                  {certification.companys.active ? 
                  (certification.companys.names.map((item, index) => (      
                    <p key={index} className='my-1 mx-2  py-1 px-2 certCompany'>{item}</p>
                  ))
                  )
                  :null}
                  
                </div> 
                </Col>
                <Col xs={12} xl={4} className='align-self-end'>
                <Button variant='info' className='d-flex align-items-center p-1' >
                  <FcDiploma1 size={22} className='me-1'/>
                  <a href={certification.url} target="_blank" className='certButton'> Certificado</a>
                </Button>
                </Col>  
              </Row>
            </Col> 
          </Row>
          
        </div>
      </Container>
    </div>
  )
}

export default CertificationCard
