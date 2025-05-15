import React from 'react'
import { Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap'

const ExperienceCard = (experience) => {
  
  return (
    <div >
      <Container fluid className='my-2 py-4 ps-4' id="expCard">
        <Card>
          <div className='logoContent rounded-3'>
            <Row className=''>
                <Col xs={12} sm={4}>
                  <Image src={experience.img} />
                </Col>
                <Col xs={12} sm={8} className='py-3 px-4'>
                    <h3>{experience.role}</h3>
                    <h4>{experience.place}</h4>
                    <h4>{experience.time}</h4>
                    
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
