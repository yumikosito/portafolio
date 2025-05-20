import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/home/NavBar'
import Header from './components/home/Header';
import Skills from './pages/Skills';
import Footer from './components/home/Footer';
import Education from './pages/Education';
import Certifications from './pages/Certifications';
import Experience from './pages/Experience';
import Portfolio from './pages/Portfolio';


function App() {


  return (
    <>
      <NavBar/>
      <Header/>
    
      <Skills/>
      <Education/>
      <Certifications/>
      <Experience/>
      <Portfolio/>

      <Footer/>
    </>
  )
}

export default App
