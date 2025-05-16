import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/home/NavBar'
import Header from './components/home/Header';
import Skills from './pages/Skills';
import Footer from './components/home/Footer';
import Education from './pages/Education';
import Certifications from './pages/Certifications';
import Experience from './pages/Experience';
import Portfolio from './pages/Portfolio';
import { Route, Routes, } from 'react-router-dom';
import React from 'react';

function App() {


  return (
    <>

      <NavBar/>
       <Header/>
    
      <Skills/>
      <Education/>
      <Certifications/>
      
      <Portfolio/>
      <Experience/>
  
 
       
        {/* <Routes>
          <Route path='/skills' element={<Skills/>} ></Route>
          <Route path='/education' element={<Education/>}></Route>
          <Route path='/certifications'  Component={<Certifications/>}></Route>
          <Route path='/experience'  Component={<Experience/>}></Route>
          <Route path='/portfolio'  Component={<Portfolio/>}></Route>
        </Routes> */}
      <Footer/>

    </>
  )
}

export default App
