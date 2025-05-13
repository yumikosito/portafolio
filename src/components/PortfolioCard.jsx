import React from 'react'
import { Button, Card, Col, Container, Image, ListGroup, Row } from 'react-bootstrap'
import { IoCalendarOutline } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";

const PortfolioCard = (project) => {
  console.log(project);
  
  return (
    <div >
      <Container className='rounded-4' id='portCard'>
        <Card>
          <Row>
            <Col xs={12} sm={8}>
              <Row className='d-flex flex-column px-4 py-5 m-2'>
                <h3 className='portTitle'>{project.title}</h3>
                <h6 className='portDate my-2'><IoCalendarOutline size={25}/> {project.date}</h6>
                <div className='bar'></div>
                <p className='portText my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consectetur harum aliquid ex non odit nemo vitae perferendis doloribus reiciendis cumque dolorem, autem ducimus accusamus velit culpa, molestiae dicta ratione!</p>
                <ListGroup horizontal className='my-2'>
                  <ListGroup.Item action className='portList'><FaCode size={20}/> {project.author}</ListGroup.Item>
                  <ListGroup.Item action className='portList' href={project.url}><FiExternalLink size={20}/> Visitar página</ListGroup.Item>
          
                </ListGroup>

              </Row>
            </Col >
              

            <Col xs={12} sm={4}>
            <Image className='portImg rounded-4' src={project.imgMb}/>
            </Col>
          </Row>
        </Card>
      </Container>
      
    </div>
  )
}

export default PortfolioCard
