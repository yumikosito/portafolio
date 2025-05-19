import { Col, Container, ProgressBar, Row } from 'react-bootstrap'

const LangSkills = () => {
  return (
    <div>
      <Container className='my-2 py-3 mx-0' id="langCard">
        <h2>- Idiomas</h2>
        <Row className='d-flex justify-content-between align-items-center my-2 py-2 ps-4'>
          <Col xs={6} sm={3} md={3} className='spanishProg my-2'>
            <p className='langText m-0 p-0'>Español</p>
            <ProgressBar animated striped  now={100} />
          </Col>
          <Col xs={6} sm={3} md={3} className='englishProg my-2'>
            <p className='langText m-0 p-0'>Inglés</p>
            <ProgressBar animated striped  now={85} />
          </Col>
          <Col xs={6} sm={3} md={3} className='japaneseProg my-2'>
            <p className='langText m-0 p-0'>Japonés</p>
            <ProgressBar animated striped  now={15} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LangSkills
