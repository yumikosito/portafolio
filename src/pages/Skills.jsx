
import { Container } from 'react-bootstrap'
import TechSkills from '../components/skills/TechSkills';
import LangSkills from '../components/skills/LangSkills';
import SoftSkills from '../components/skills/SoftSkills';

const Skills = () => {
  return (
    <div id='skills' >
      <Container className='my-2 py-3'>
        <h1 className='mt-5'>Habilidades</h1>
        <TechSkills/>
        <hr className='skillHr'/>
        <SoftSkills/>
        <hr className='skillHr'/>
        <LangSkills/>
      </Container>
    </div>
  )
}

export default Skills
