import React from 'react'
import '../App.css'
import { Button } from './Button'
import './MainSection.css'

function MainSection() {
  return (
    <div className='main-container'>
      <h1>MATTHEW BRIGHTMAN</h1>
      <p>Welcome to my Website Resume!</p>
      <div className='main-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Education</Button>

        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Work Experience</Button>

        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Skills & Projects</Button>
      </div>
    </div>
  )
}

export default MainSection
// if wanted a BACKGROUND VID: HTML code <video src='src of video' autoPlay loop muted /> 