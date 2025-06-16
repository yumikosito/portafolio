import { useContext } from 'react'
import { Col, Container, ProgressBar, Row } from 'react-bootstrap'
import { GetContext } from '../../contexts/getContext'

const LangSkills = () => {
  const { esp } = useContext(GetContext)
  return (
    <div>
      <Container className='my-2 py-3 mx-0' id="langCard">
        <h2>- {esp ? 'Idiomas': 'Languages'}</h2>
        <Row className='d-flex justify-content-between align-items-center my-2 py-2 ps-4'>
          <Col xs={6} sm={3} md={3} className='spanishProg my-2'>
            <p className='langText m-0 p-0'>{esp ? 'Español': 'Spanish'}</p>
            <ProgressBar animated striped  now={100} />
          </Col>
          <Col xs={6} sm={3} md={3} className='englishProg my-2'>
            <p className='langText m-0 p-0'>{esp ? 'Inglés': 'English'}</p>
            <ProgressBar animated striped  now={85} />
          </Col>
          <Col xs={6} sm={3} md={3} className='japaneseProg my-2'>
            <p className='langText m-0 p-0'>{esp ? 'Japonés':'Japanese'}</p>
            <ProgressBar animated striped  now={25} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LangSkills
