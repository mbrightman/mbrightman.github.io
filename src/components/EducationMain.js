import React from 'react'
import '../App.css'
import './EducationMain.css'

function EducationMain() {
    return(
        <>
            <div className='education-tagline'>
                <h1>Tarheel Born,<br/></h1>
                <h1 style={{marginLeft:200}}>Tarheel Bred</h1>
            </div>

            <div className='education-details'>
                <h2>University of North Carolina at Chapel Hill</h2>

                <div className='education-degrees'>
                    <p>Bachelor of Science in Computer Science</p>
                    <p>Bachelor of Arts in Mathematics</p>
                    <p>Minor in Statistics</p>
                    <p>GPA: 3.4</p>
                </div>

                <p>I graduated from the University of North Carolina at Chapel Hill in 2022 with a Bachelor of Science in Computer 
                    Science, a Bachelor of Arts in Mathematics, and a Minor in Statistics. During my time at UNC, I enjoyed exploring 
                    my passions for cybersecurity, software development, cryptography, and sports analytics. I engaged in projects 
                    that deepened my understanding of these fields and participated in organizations that aligned with my interests, 
                    including Cru, Intramural Sports, and COMP110 Hackathons.
                </p>
                <br/>
                <h3>Relevant Coursework</h3>
                <div className='coursework-container'>
                    <div className='column'>
                        <p>JavaScript</p>
                        <p>Java</p>
                        <p>C#</p>
                        <p>ReactJS</p>
                        <p>Algorithms & Analysis</p>
                    </div>
                    <div className='column'>
                        <p>Cryptography</p>
                        <p>Password Cracking</p>
                        <p>Hash Encryption</p>
                        <p>Security Principles</p>
                        <p>Network Protocols</p>
                    </div>
                    <div className='column'>
                        <p>Python</p>
                        <p>Internet Services & Programming</p>
                        <p>R</p>
                        <p>SQL</p>
                        <p>Data Structures</p>
                    </div>
                </div>
                <br/>
                <h3>Internships</h3>
                <div className='internship-table'>
                    <table>
                        <tr>
                            <td>
                                <h4>Web Development Intern, TIAA</h4>
                                <p style={{marginLeft: 30}}>
                                    Assisted with features and integration of a web application using Angular and 
                                    Java, including developing features, improving UI, and demoing the application 
                                    for associates. Also responsible for developing a quantitative method for tracking 
                                    associate training for gamification purposes.
                                </p>
                            </td>
                            <td><h4>June 2020 - August 2020</h4></td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Vulernability Management Cyber Security Intern, TIAA</h4>
                                <p style={{marginLeft:30}}>Worked with teammates to identify and remediate infrastructure vulnerabilities 
                                    using Python, SQL, and web applications including Nexpose and Splunk. 
                                    Developed a Splunk Dashboard and worked on Python automation scripts.
                                    </p>
                            </td>
                            <td>
                                <h4>June 2021 - August 2021</h4>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Software Quality Assurance Tester, RENCI</h4>
                                <p style={{marginLeft:30}}>Manually tested web applications created by RENCI to ensure that all functionality 
                                within the applications worked correctly. Began development of Python automated testing for RENCI applications.
                                Began writing documentation for software products.</p>
                            </td>
                            <td>
                                <h4>August 2020 - May 2021</h4>
                            </td>
                        </tr>
                    </table>
                </div>
                <br/>
                <h3>Projects</h3>
                <div className='projects-links'>
                    <div className='project'>
                        <a href='/'>
                            <img src='./images/unc-pic.jpg' alt='UNC_Baseball_Analytics'></img>
                            <div className='project-title'>UNC Baseball Analytics</div>
                        </a>
                    </div>
                    <div className='project'>
                        <a href='/'>
                            <img src='./images/matt_head.jpg' alt='Project2'></img>
                            <div className='project-title'>Project 2</div>
                        </a>
                    </div>
                    <div className='project'>
                        <a href='/'>
                            <img src='./images/matt_head.jpg' alt='Project3'></img>
                            <div className='project-title'>Project 3</div>
                        </a>
                    </div>
                </div>

                <div className='projects-container'>
                    <h4>UNC Baseball Analytics</h4>
                    <h4>Web Development: COVID Dashboard</h4>
                    <h4>MATLAB Math Projects</h4>
                    <h4>Python Password Cracking - Dictionary Attacks</h4>
                </div>
                <br/>
                <h3>Extracurriculars</h3>
                <div className='extracurriculars-container'>
                    <h4>COMP110 Hackathon</h4>
                    <h4>Intramural Sports</h4>
                    <h4>Cru</h4>
                </div>
            </div>
        </>
        

    )
}

export default EducationMain