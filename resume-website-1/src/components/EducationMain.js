import React from 'react'
import '../App.css'
import './EducationMain.css'

function EducationMain() {
    return(
        <div className='education-details'>
            <h2>Degrees Earned</h2>

            <div className='education-degrees'>
                <p>Bachelor of Science in Computer Science</p>
                <p>Bachelor of Arts in Mathematics</p>
                <p>Minor in Statistics</p>
                <p>GPA: 3.4</p>
            </div>

            <p>This is a quick paragraph summarizing my time at UNC.</p>
            <br/>
            <h3>Coursework</h3>
            <div className='coursework-container'>
                <div className='column'>
                    <p>Python</p>
                    <p>JavaScript</p>
                    <p>Java</p>
                    <p>C#</p>
                    <p>ReactJS</p>
                </div>
                <div className='column'>
                    <p>Cryptography</p>
                    <p>Password Cracking</p>
                    <p>Hash Encryption</p>
                </div>
                <div className='column'>
                    <p>R</p>
                    <p>MySQL</p>
                    <p>Web Development</p>
                </div>
            </div>
            <br/>
            <h3>Internships</h3>
            <div className='internship-container'>
                <div className='internship'>

                </div>
                <div className='internship'>

                </div>
                <div className='internship'>

                </div>
            </div>
            <br/>
            <h3>Projects</h3>
            <div className='projects-container'>
                <p>UNC Baseball Analytics</p>
                <p>Web Development: COVID Dashboard</p>
                <p>MATLAB Math Projects</p>
                <p>Python Password Cracking - Dictionary Attacks</p>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>

    )
}

export default EducationMain