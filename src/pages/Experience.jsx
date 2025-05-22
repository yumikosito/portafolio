import { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ExperienceCard from '../components/cards/ExperienceCard'
import { GetContext } from '../contexts/getContext'

const Experience = () => {
  const { exps, esp } = useContext(GetContext)
  
  return (
    <div id='experience'>
      <Container className='my-1 py-2'>
        <h1 className='mt-5'>{esp ? 'Experiencia':'Experience'}</h1>
        <Row className='my-1 py-1 d-flex'>
          {exps.map((item, index) =>(
            <Col xs={12} md={6} key={index}>
              <ExperienceCard  {...item}/>
            </Col>
          ))
          }
        </Row>
      </Container>
    </div>
  )
}

export default Experience
