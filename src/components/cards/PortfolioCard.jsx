import { Button, Col, Container, Image, ListGroup, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import { IoCalendarOutline } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";
import { useContext } from 'react';
import { GetContext } from '../../contexts/getContext';

const PortfolioCard = (project) => {
  const { esp } = useContext(GetContext)
  return (
    <div>
      <Container id='portCard'>
        <div className='postcard'>
          <Row >
            <Col xs={12} md={7}>
              <Row className='d-flex flex-column px-3 pt-3 pb-1'>
                <h3 className='portTitle px-3'>{project.title}</h3>
                <div className='d-flex px-3'>
                  <IoCalendarOutline size={20}/><h6 className='portDate align-items-center mx-2'>{project.date}</h6>
                </div>
                
                <div className='bar my-2 mx-1 rounded-3 px-'></div>

                <ListGroup horizontal className='px-1'>
                  <ListGroup.Item className='portListAuthor'><FaCode size={13}/> {project.author}</ListGroup.Item> 
                  <ListGroup.Item className='portListLink'>
                    
                    <FiExternalLink size={13}/>
                    {project.website.status ?
                    <a href={project.website.url} target="_blank"> {esp ? 'Visitar página': 'Website'} </a>
                    :
                    <a className=''> {esp ? 'Privado': 'Private'}</a>
                    }
                    </ListGroup.Item>
                </ListGroup>

                <p className='portText my-2 px-2 py-1'>{project.category.resume}</p>
                 </Row>
                <Row className='mb-2 pb-2 d-flex mx-1 justify-content-evenly'>
                    {project.category.details.map((detail,index)=>(
                      <Col xs={4} className='' key={index}>
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
                          <Button className='px-2 mx-1' variant="info">{detail.name}</Button>
                        </OverlayTrigger>
                       </Col>
                    ))}
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
