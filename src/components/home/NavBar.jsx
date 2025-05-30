import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect, useContext } from 'react';
import { Linkedin, Github} from 'react-bootstrap-icons';
import { NavHashLink } from 'react-router-hash-link';
import { Form } from 'react-bootstrap';
import { GetContext } from '../../contexts/getContext';


const NavBar = () => {
  const { esp, setEsp } = useContext(GetContext)
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
    <Navbar fixed="top" collapseOnSelect expand="lg" id='navbarConfig' className={scrolled ?'scrolled':""}>
      <Container fluid>
        <Form onChange={(e) =>{
          const newToggle = !esp;
          setEsp(newToggle); 
        }}>
          <Form.Check
            type="switch"
            id="langSwitch"
            label="ESP/ENG"
          />
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
          <Nav>
            <Nav.Link as={NavHashLink} className='navbarText' to='#header'>Home</Nav.Link>
            <NavDropdown title={esp ? "Sobre mí":"About me"} className='navbarText'>
              <NavDropdown.Item as={NavHashLink} className='navbarText' to='#skills'>{esp ? 'Habilidades': 'Skills'}</NavDropdown.Item>
              <NavDropdown.Item as={NavHashLink} className='navbarText' to='#education'>{esp ? 'Educación':'Education'}</NavDropdown.Item>
              <NavDropdown.Item as={NavHashLink} className='navbarText' to='#certifications'>{esp ? 'Certificaciones': 'Certifications'}</NavDropdown.Item>
              <NavDropdown.Item as={NavHashLink} className='navbarText' to='#experience'>{esp ? 'Experiencia':'Experience'}</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavHashLink} to='#portfolio' className='navbarText'>{esp ? 'Proyectos': 'Projects'}</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/millaray-painemil/" target='_blank'><Linkedin size={25}/></Nav.Link>
            <Nav.Link href="https://github.com/yumikosito" target='_blank'><Github size={25}/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}


export default NavBar
