import React from 'react'
import '../App.css'
import './SkillsMain.css'
import { CertsCarousel } from './CertsCarousel'

import mlbLogo from 'C:/Users/mattb523/Documents/my-website/my-website/resume-website-1/src/components/images/mlb-logo.png'
import weatherLogo from 'C:/Users/mattb523/Documents/my-website/my-website/resume-website-1/src/components/images/mlb-logo.png'



function SkillsMain() {
    return(
        <>
            <div className='certs-skills-box'>
                <h2>Certifications and Skills</h2>
                <div className='certs-skills-columns'>
                    <div className='certs-column'>
                        <CertsCarousel />
                    </div>
                    <div className='skills-column'>
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
                                </div>
                                <div className='column'>
                                    <h4>Frameworks</h4>
                                    <p>AWS</p>
                                    <p>React</p>
                                    <p>Node.js</p>
                                    <p>Angular</p>
                                    <p>GCP</p>
                                    <p>Mainframe</p>
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
                    </div>
                </div>
            </div>    


        <div className='projects-box'>
            <h2>Projects</h2>

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
                    <a href='/'>
                        <div className='project-image-wrapper'>
                            <img src={mlbLogo} alt='website_project'/>
                            <div className='project-title'>This Website!</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>

            
        </>
    )
}

export default SkillsMain