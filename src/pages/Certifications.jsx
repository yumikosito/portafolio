import { useContext } from 'react'
import CertificationCard from '../components/cards/CertificationCard'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import { GetContext } from '../contexts/getContext'

const Certifications = () => {
  const { certs, esp } = useContext(GetContext)
  return (
    <div>
      <Container className='mt-2 py-2' id='certifications'>
        <h1 className='mb-4 mt-5'>{esp ? 'Certificaciones': 'Certifications'}</h1>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{esp ? 'Diplomados':'Diplomas'}</Accordion.Header>
              <Accordion.Body>
                <Row>
                  {certs.map((cert,index) => (
                    (cert.type===1) ? 
                      <Col xs={12} lg={6} key={index}>
                      <CertificationCard {...cert}/>
                      </Col>
                    :null
                    )
                  )}
                </Row>
                
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>{esp ? 'Cursos':'Courses'}</Accordion.Header>
              <Accordion.Body>
                 <Row>
                {certs.map((cert,index) => (
                  (cert.type===0) ? 
                    <Col xs={12} lg={6} key={index}>
                      <CertificationCard {...cert}/>
                    </Col>
                  :null
                  )
                )}
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
   
      </Container>
    </div>
  )
}

export default Certifications
