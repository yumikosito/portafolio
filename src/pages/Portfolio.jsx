import React, { useContext } from 'react'
import PortfolioCard from '../components/PortfolioCard'
import { Container } from 'react-bootstrap'
import { GetContext } from '../contexts/getContext'

const Portfolio = () => {
  const { ports } = useContext(GetContext)
  return (
    <div>
      <Container className='my-2 py-3'>
        <h1>Portfolio</h1>
        { ports.map((port,index) =>(
          <div className='my-5' key={index}>
            <PortfolioCard {...port}/>
          </div>
          
        ))}
        
      </Container>
    </div>

  )
}

export default Portfolio
