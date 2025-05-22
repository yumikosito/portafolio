import { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { GetContext } from '../../contexts/getContext'

const Footer = () => {
  const { esp } = useContext(GetContext)
  return (
    <div>
      <Container fluid expand="lg" sticky="bottom" id='footer' className='px-5 mt-4 py-3'>
        <Row>
          <p className='d-flex justify-content-center align-items-center footerText py-2'>{esp ? 'Página creada por':'Website created by'} Millaray Painemil 2025</p>
        </Row>
      </Container>
      
    </div>
  )
}

export default Footer
