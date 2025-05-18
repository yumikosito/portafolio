import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button, Card, Col, Container, Image, ListGroup, Overlay, OverlayTrigger, Row, Tab, Tooltip } from 'react-bootstrap'
import { IoCalendarOutline } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";

const PortfolioCard = (project) => {
  
  return (
    <div>
      <Container id='portCard'>
        <div className='postcard'>
          <Row >
            <Col xs={12} md={7}>
              <Row className='d-flex flex-column px-3 py-4'>
                <h3 className='portTitle px-3'>{project.title}</h3>
                <div className='d-flex px-3'>
                  <IoCalendarOutline size={20}/><h6 className='portDate align-items-center mx-2'>{project.date}</h6>
                </div>
                
                <div className='bar my-2 mx-1 rounded-3 px-3'></div>
                <ListGroup horizontal className='px-3'>
                  <ListGroup.Item className='portListAuthor'><FaCode size={15}/> {project.author}</ListGroup.Item> 
                  <ListGroup.Item className='portListLink'>
                    
                    <FiExternalLink size={15}/>
                    {project.website.status ?
                    <a href={project.website.url} target="_blank"> Visitar página</a>
                    :
                    <a className=''> Privado</a>
                    }
                    </ListGroup.Item>

                </ListGroup>
                <p className='portText my-2 px-3 py-2'>{project.category.resume}</p>
                
                <Row>

                    {project.category.details.map((detail,index)=>(
                      <Col xs={4} className='px-3' key={index}>
                        <OverlayTrigger
                          key={index}
                          placement='bottom'
                          overlay={  
                          <Tooltip id={`tooltip-${detail}`}>                       
                            {detail.items.map((item,index)=>(
                              <ListGroup.Item className='portListDetail' key={index}>- {item}</ListGroup.Item>
                            ))}
                          </Tooltip>
                          }
                          >
                          <Button variant="info">{detail.name}</Button>
                        </OverlayTrigger>
                       </Col>
                    ))}
                </Row>
              </Row>
            </Col >
              

            <Col xs={12} md={5}>
            <Image className='portImg' src={project.imgMb}/>
            </Col>
          </Row>
        </div>
      </Container>
      
    </div>
  )
}

export default PortfolioCard
