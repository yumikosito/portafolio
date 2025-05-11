import { Col, Container, ProgressBar, Row } from 'react-bootstrap'

const LangSkills = () => {
  return (
    <div>
    <Container className='my-2 py-3'>
      <h1>Idiomas</h1>
      <Row className='d-flex justify-content-between align-items-center my-2 py-2 ps-4'>
        <Col xs={4} sm={3} md={3} className='spanishProg'>
          <p className='langText'>Español</p>
          <ProgressBar animated striped  now={100} />
        </Col>
        <Col xs={4} sm={3} md={3} className='englishProg'>
          <p className='langText'>Inglés</p>
          <ProgressBar animated striped  now={85} />
        </Col>
        <Col xs={4} sm={3} md={3} className='japaneseProg'>
          <p className='langText'>Japonés</p>
          <ProgressBar animated striped  now={15} />
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default LangSkills
