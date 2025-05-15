import React, { useContext } from 'react'
import PortfolioCard from '../components/PortfolioCard'
import { Col, Container, Row } from 'react-bootstrap'
import { GetContext } from '../contexts/getContext'

const Portfolio = () => {
  const { ports } = useContext(GetContext)
  return (
    <div>
      <Container className='my-2 py-3'>
        <h1>Portfolio</h1>
        <Row>

        { ports.map((port,index) =>(
          <Col xs={12} lg={6} className='my-5' key={index}>
            <PortfolioCard {...port}/>
          </Col>
        ))}
        </Row>
        
      </Container>
    </div>

  )
}

export default Portfolio
