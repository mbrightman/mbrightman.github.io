import React from 'react'
import '../App.css'
import './SkillsMain.css'

function SkillsMain() {
    return(
        <>
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
                    <div className='column'>
                        <h4>Certifications</h4>
                        <p>AWS Cloud Practitioner (Complete)</p>
                        <p>CompTIA Security+ (In Progress)</p>
                    </div>
                </div>
            </div>

            <div className='projects-links'>
                <div className='project'>
                    <a href='/'>
                        <img src='C:\Users\mattb523\Documents\resume-master\my-website\resume-website-1\src\components\images\matt_head.jpg' alt='Project1'></img>
                        <div className='project-title'>Project 1</div>
                    </a>
                </div>
                <div className='project'>
                    <a href='/'>
                        <img src='C:\Users\mattb523\Documents\resume-master\my-website\resume-website-1\src\components\images\matt_head.jpg' alt='Project2'></img>
                        <div className='project-title'>Project 2</div>
                    </a>
                </div>
                <div className='project'>
                    <a href='/'>
                        <img src='images/matt_head.jpg' alt='Project3'></img>
                        <div className='project-title'>Project 3</div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default SkillsMain