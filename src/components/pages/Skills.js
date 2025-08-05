import React, { useEffect } from 'react'
import '../../App.css'
import SkillsMain from '../SkillsMain.js'

export default function Skills() {
    useEffect(() => {
        document.title = 'Skills & Projects';
        }, []
    );
    
    return(
        <>
            <div className='skills'>
                <h1>SKILLS</h1>
            </div>
            

            <SkillsMain />
            
        </>
        
    )
}