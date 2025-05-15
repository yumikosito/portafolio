import React from 'react'
import { Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap'

const ExperienceCard = (experience) => {
  
  return (
    <div >
      <Container fluid className='my-2 py-4 ps-4' id="expCard">
        <Card>
          <div className='logoContent rounded-3'>
            <Row className=''>
                <Col xs={12} sm={3}>
                  <Image src={experience.img} />
                </Col>
                <Col xs={12} sm={9} className='d-flex flex-column justify-items-around py-3 px-2'>
                    <p className='roleText my-1'>{experience.role}</p>
                    <p className='placeText mb-1'>{experience.place} | {experience.time}</p>
                </Col>
            </Row>  
          </div>
      
            
            <div className= "content rounded-3">
              {experience.tasks.map((task,index)=>(
                <p className='px-4' key={index}>
                {task}
                </p>
              ))}
              </div>
 
   
        </Card>
      </Container>
    </div>
  )
}

export default ExperienceCard
