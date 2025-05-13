import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from 'react';
import { Linkedin, Github, EnvelopeAtFill} from 'react-bootstrap-icons';
import { ActiveContext } from '../contexts/ActiveLinks';
import { Link } from 'react-router-dom';


const NavBar = () => {

  const [scrolled,setScrolled]=useState(false);

  useEffect(()=>{
    const onScroll = ()=>{
      if(window.scrollY>50){
        setScrolled(true);
      } else{
        setScrolled(false);
      }
    }
    window.addEventListener('scroll',onScroll);
    return ()=>window.removeEventListener('scroll',onScroll)
  },[])



  return (
    <div>
    <Navbar fixed="top" id='navbarConfig' className={scrolled ?'scrolled':""}>
      <Container fluid>
        {/* <Navbar.Brand href="#home">Millaray Painemil</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
          <Nav>
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <NavDropdown title="Sobre mí">
              <NavDropdown.Item as={Link} to='/skills'>Habilidades</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/education'>Educación</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/certifications'>Certificaciones</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/experience'>Experiencia</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to='/portafolio'>Portafolio</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/millaray-painemil/"><Linkedin size={25}/></Nav.Link>
            <Nav.Link href="https://github.com/yumikosito"><Github size={25}/></Nav.Link>
      

            {/* <NavDropdown title="Contacto" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.linkedin.com/in/millaray-painemil/"><Linkedin/> Linkedin</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/yumikosito"><Github/> Github</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}


export default NavBar
