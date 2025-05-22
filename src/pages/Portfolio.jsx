import { useContext } from 'react'
import PortfolioCard from '../components/cards/PortfolioCard'
import { Col, Container, Row } from 'react-bootstrap'
import { GetContext } from '../contexts/getContext'

const Portfolio = () => {
  const { ports, esp } = useContext(GetContext)
  return (
    <div>
      <Container className='mt-2 py-2' id='portfolio'>
        <h1 className='mt-5'>{esp ? 'Proyectos': 'Projects'}</h1>
        <Row>
        { ports.map((port,index) =>(
          <Col xs={12} xl={6} className='my-5' key={index}>
            <PortfolioCard {...port}/>
          </Col>
        ))}
        </Row>
      </Container>
    </div>
  )
}

export default Portfolio
