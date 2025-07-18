import React from 'react'
import '../App.css'
import './SkillsMain.css'
import { CertsCarousel } from './CertsCarousel'

import mlbLogo from 'C:/Users/mattb523/Documents/my-website/my-website/resume-website-1/src/components/images/mlb-logo.png'
import weatherLogo from 'C:/Users/mattb523/Documents/my-website/my-website/resume-website-1/src/components/images/mlb-logo.png'



function SkillsMain() {
    return(
        <>
            <h4>Certifications</h4>
            <CertsCarousel />

            <div className='skills-details'>
                <div className='skills-container'>
                    <div className='column'>
                        <h4>Languages</h4>
                        <p>Python</p>
                        <p>JavaScript</p>
                        <p>SQL</p>
                        <p>Java</p>
                        <p>Splunk</p>
                        <p>HTML/CSS</p>
                        <p>R</p>
                        <p>C</p>
                    </div>
                    <div className='column'>
                        <h4>Frameworks</h4>
                        <p>AWS</p>
                        <p>React</p>
                        <p>Node.js</p>
                        <p>Angular</p>
                        <p>Google Cloud Platform</p>
                    </div>
                    <div className='column'>
                        <h4>Developer Tools</h4>
                        <p>Git</p>
                        <p>Visual Studio</p>
                        <p>Eclipse</p>
                        <p>Anaconda</p>
                        <p>Debian</p>
                    </div>
                </div>
            </div>

            <div className='projects-links'>
                <div className='project'>
                    <a href='/skills'>
                        <div className='project-image-wrapper'>
                            <img src={mlbLogo} alt='baseball_project'/>
                            <div className='project-title'>Baseball Live Leaderboards</div>
                        </div>
                    </a>
                </div>
                <div className='project'>
                    <a href='/skills'>
                        <div className='project-image-wrapper'>
                            <img src={weatherLogo} alt='weather_app'/>
                            <div className='project-title'>Weather App</div>
                        </div>
                    </a>
                </div>
                <div className='project'>
                    <a href='/skills'>
                        <div className='project-image-wrapper'>
                            <img src={mlbLogo} alt='baseball_project'/>
                            <div className='project-title'>Baseball Live Leaderboards</div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default SkillsMain