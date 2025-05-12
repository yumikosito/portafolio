import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/NavBar'
import Header from './components/Header';
import Skills from './pages/Skills';
import Footer from './components/Footer';
import Education from './pages/Education';
import Certifications from './pages/Certifications';
import Experience from './pages/Experience';
import Portfolio from './pages/Portfolio';
import { Route, Routes, Switch } from 'react-router-dom';
import React from 'react';

function App() {


  return (
    <>
    <React.Fragment>
      <NavBar/>
    
      {/* <Skills/>
      <Education/>
      <Certifications/>
      <Experience/>
      <Portfolio/> */}
  
      <Routes>
        <Header/>
        <Route path='/skills' exact Component={<Skills/>}></Route>
        <Route path='/education' strict exact Component={<Education/>}></Route>
        <Route path='/certifications' strict exact Component={<Certifications/>}></Route>
        <Route path='/experience' strict exact Component={<Experience/>}></Route>
        <Route path='/portfolio' strict exact Component={<Portfolio/>}></Route>
      </Routes>
      <Footer/>
    </React.Fragment>
    </>
  )
}

export default App
