import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { RxDot } from "react-icons/rx";

const SoftSkills = () => {

  const softList = ['Trabajo en Equipo', 'Empática', 'Activa para resolución de problemas', 'Buenas habilidades comunicativas', 'Adaptabilidad frente a los cambios', 'Proactiva', 'Trabajo bajo condiciones exigentes']

  return (
    <div>
      <Container className='my-2 py-3 mx-0' id="softCard">
        <h2>- Blandas</h2>
        <Row className='d-flex justify-content-between align-items-center my-2 py-2 ps-4'>
            {softList.map((item,index) =>(
              <Col xs={12} md={6} xl={4} key={index}>
               <p><RxDot size={15}/> {item}</p>
              </Col>
            ))}
      
        </Row>
      </Container>
    </div>
  )
}

export default SoftSkills
