import React, { useEffect } from 'react'
import { Button, Card, Col, Container, Image, ListGroup, Row, Tab } from 'react-bootstrap'
import { IoCalendarOutline } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";

const PortfolioCard = (project) => {
  console.log(project);
  
  return (
    <div >
      <Container className='' id='portCard'>
        <Card>
          <Row>
            <Col xs={12} sm={8}>
              <Row className='d-flex flex-column px-4 py-5 m-2'>
                <h3 className='portTitle'>{project.title}</h3>
                <div className='d-flex '>
                  <IoCalendarOutline size={25}/><h6 className='portDate align-items-center mx-2'>{project.date}</h6>
                </div>
                
                <div className='bar m-2 rounded-3'></div>
                <ListGroup horizontal className='m-2'>
                  <ListGroup.Item className='portListAuthor'><FaCode size={20}/> {project.author}</ListGroup.Item>
                  <ListGroup.Item action className='portListLink' href={project.url}><FiExternalLink size={20}/> Visitar página</ListGroup.Item>

                </ListGroup>
                <p className='portText my-2'>{project.category.resume}</p>
                  
                <Tab.Container defaultActiveKey="#Funciones">
                  <Row>
                    <Col xs={4}>
                        {project.category.details.map((detail,index)=>(
                          <ListGroup.Item action key={index} href={`#${detail.name}`}>{detail.name}</ListGroup.Item>
                        ))}
                   </Col>

                  <Col xs={8}>
                    <Tab.Content>
                      {project.category.details.map((detailTab,index)=>(   
                        <Tab.Pane key={index} eventKey={`#${detailTab.name}`}>
                          {detailTab.items.map((item,index)=>(
                            <ListGroup.Item key={index}>{item}</ListGroup.Item>
                          ))}    
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                   </Col>
                  </Row>
                </Tab.Container>
 
                

              </Row>
            </Col >
              

            <Col xs={12} sm={4}>
            <Image className='portImg' src={project.imgMb}/>
            </Col>
          </Row>
        </Card>
      </Container>
      
    </div>
  )
}

export default PortfolioCard
