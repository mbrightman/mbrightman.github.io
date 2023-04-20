import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Education from './components/pages/Education'
import Work from './components/pages/Work'
import Skills from './components/pages/Skills'

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/education' element={<Education />} />
          <Route exact path='/work' element={<Work />} />
          <Route exact path='/skills' element={<Skills />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
// use "rfce" shortcut to create basic structure