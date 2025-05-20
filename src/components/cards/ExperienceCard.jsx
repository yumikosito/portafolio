import React from 'react'
import { Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap'

const ExperienceCard = (experience) => {
  
  return (
    <div >
      <Container className='my-3 py-2' id="expCard">
        <Card >
          <div className='logoContent rounded-3' style={{backgroundColor: `${experience.color}`}}>
            <Row className=''>
                <Col xs={4} xl={3}>
                  <Image src={experience.img} />
                </Col>
                <Col xs={8} xl={9} className='d-flex flex-column justify-items-around py-3 px-2'>
                    <p className='roleText my-0 '>{experience.role}</p>
                    <p className='placeText my-0'>{experience.place}</p>
                    <p className='dateText my-0'> {experience.time}</p>
                </Col>
            </Row>  
          </div>
      
            
            <div className= "content rounded-3">
              {experience.tasks.map((task,index)=>(
                <p className='px-3 my-1' key={index}>
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
