import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'

const ExperienceCard = (experience) => {
  console.log(experience);
  
  return (
    <div id="eduCard">
      <Container fluid className='my-2 py-4 ps-4'>
        <div className='card'>
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
 
   
        </div>
      </Container>
    </div>
  )
}

export default ExperienceCard
