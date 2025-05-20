import { ButtonGroup, Col, Container, Dropdown, DropdownButton, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const EducationCard = (education) => {
  
  return (
    <div>
      <Container id='eduCard' className='my-3' style={{backgroundColor: `${education.color}`}}>
        <div className='eduContent p-2' >
        <Row>
          <Col xs={3} className='d-flex justify-content-center'>
            <Image className='eduImg' src={education.img}/>
          </Col>
          <Col xs={9}>
            <Row>
              <p className='eduTitle my-1'>{education.degree}</p>
              <Col xs={education.certs.active ? '7': '12'}>
                 <p className='eduPlaceTime mb-1'>{education.place}<br/>
                 {education.date}</p>
                
              </Col>
                {education.certs.active ?
                (
                  <Col className='p-0' xs={5}>
                    <DropdownButton
                      as={ButtonGroup}
                      size="sm"
                      variant="secondary"
                      title={education.certs.title}
                    >
                    {
                      education.certs.items.map((item,index) => (
                        <Dropdown.Item as={Link} key={index} to={item.url} target="_blank">{item.name}</Dropdown.Item>
                      ))
                    }
                  </DropdownButton>
                </Col>
                ) :null
                }
             
            </Row>
          </Col>
        </Row>
        </div>
      </Container>
    </div>
  )
}

export default EducationCard
