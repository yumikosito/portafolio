import { useContext } from 'react'
import { Button, Card, Col, Container, Image, OverlayTrigger, Popover, Row} from 'react-bootstrap'
import { GetContext } from '../../contexts/getContext'

const ExperienceCard = (experience) => {
  const { esp } = useContext(GetContext)
  return (
    <div >
      <Container className='my-3 py-2' id="expCard">
        <Card className='d-none d-lg-block'>
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
          <Col className= "content rounded-3">
            {experience.tasks.map((task,index)=>(
              <p className='px-3 my-1' key={index}>
              - {task}
              </p>
            ))}
            </Col>
        </Card>

        <div >
          <Row className='d-*-block d-lg-none rounded-3 mdRow' style={{backgroundColor: `${experience.color}`}} >
            <Col xs={4} sm={3} md={4} xl={3} className='mx-0 my-1 p-0'>
              <Image src={experience.img} className='m-0 p-0'/>
            </Col>
            <Col xs={8} sm={6} md={8} xl={9} className='d-flex flex-column justify-items-center align-self-center py-2'>
                <p className='roleText my-0 '>{experience.role}</p>
                <p className='placeText my-0'>{experience.place}</p>
                <p className='dateText my-0'> {experience.time}</p>
            </Col>
            <Col xs={12} sm={3} className='m-0 p-0 d-grid d-none d-sm-block d-md-none align-self-center'>
                  <OverlayTrigger
                  trigger="click"
                    placement='bottom'
                    overlay={  
                    <Popover>                       
                      {experience.tasks.map((item,index)=>(
                        <Popover.Body className='' key={index}>{item}</Popover.Body>
                      ))}
                    </Popover>
                    }
                    >
                    <Button size="sm" className='py-1 me-1' variant="info">{esp ? 'Funciones':'Functions'}</Button>
                  </OverlayTrigger>
                </Col>
            <Col xs={12} md={12} className='m-0 p-0 d-xs-block d-sm-none d-md-block d-grid'>
              <OverlayTrigger
              trigger="click"
                placement='bottom'
                overlay={  
                <Popover>                       
                  {experience.tasks.map((item,index)=>(
                    <Popover.Body className='' key={index}>{item}</Popover.Body>
                  ))}
                </Popover>
                }
                >
                <Button size="sm" className='mx-1 py-1' variant="info">{esp ? 'Funciones':'Functions'}</Button>
              </OverlayTrigger>
            </Col>
          </Row> 
         
        </div>
      </Container>
    </div>
  )
}

export default ExperienceCard
