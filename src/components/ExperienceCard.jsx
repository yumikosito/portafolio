import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import logoUCC from '../assets/img/ucchristus.png'

const ExperienceCard = () => {
  return (
    <div id="eduCard">
      <Container fluid className='my-2 py-4 ps-4'>
        <div className='card'>
          <div className='logoContent rounded-3'>
            <Row className=''>
                <Col xs={12} sm={4}>
                  <Image src={logoUCC} />
                </Col>
                <Col xs={12} sm={8} className='py-3 px-4'>
                    <h3>Nutricionista clínica</h3>
                    <h4>Hospital clínico UC Christus</h4>
                    <h4>2021 {'-'} 2024</h4>
                    
                </Col>
            </Row>  
          </div>
      
            
            <div className= "content rounded-3">
              <p className='px-4'> - Trato directo con pacientes y equipo médico multidisciplinario.<br/>
              - Realizar orden dietética de lo requerido por paciente, relacionando patologías, síntomas, preferencias e indicación médica.<br/>
              - Supervisión de personal dietético para entrega de bandejas, almuerzos especiales, rellenado de controles de ingesta e hidratación</p>
              </div>
 
   
        </div>
      </Container>
    </div>
  )
}

export default ExperienceCard
