
import { Col, Container, ProgressBar, Row } from 'react-bootstrap'

import TechSkills from '../components/TechSkills';
import LangSkills from '../components/LangSkills';

const Skills = () => {
  return (
    <div>
      <Container>
        <TechSkills/>
        <LangSkills/>
      </Container>
    </div>
  )
}

export default Skills
