import { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ExperienceCard from '../components/cards/ExperienceCard'

import { GetContext } from '../contexts/getContext'

const Experience = () => {
  const {exps} = useContext(GetContext)

  
  return (
    <div id='experienceContainer'>
      <Container className='my-1 py-2'>
        <h1>Experiencia</h1>
        <Row className='my-1 py-1 ps-4 d-flex'>
          {exps.map((item, index) =>(
            <Col xs={12} md={5} key={index}>
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
