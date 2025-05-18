import React from 'react'
import { Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap'

const ExperienceCard = (experience) => {
  
  return (
    <div >
      <Container fluid className='my-2 py-4 ps-4' id="expCard">
        <Card >
          <div className='logoContent rounded-3' style={{backgroundColor: `${experience.color}`}}>
            <Row className=''>
                <Col xs={4}>
                  <Image src={experience.img} />
                </Col>
                <Col xs={8} className='d-flex flex-column justify-items-around py-3 px-2'>
                    <p className='roleText my-0 '>{experience.role}</p>
                    <p className='placeText my-0'>{experience.place}</p>
                    <p className='dateText my-0'> {experience.time}</p>
                </Col>
            </Row>  
          </div>
      
            
            <div className= "content rounded-3">
              {experience.tasks.map((task,index)=>(
                <p className='px-4 my-1' key={index}>
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
