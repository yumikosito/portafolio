
import { Container } from 'react-bootstrap'

import TechSkills from '../components/cards/TechSkills';
import LangSkills from '../components/cards/LangSkills';

const Skills = () => {
  return (
    <div>
      <Container className='my-2 py-3'>
        <h1>Habilidades</h1>
        <TechSkills/>
        <LangSkills/>
      </Container>
    </div>
  )
}

export default Skills
