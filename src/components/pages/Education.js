import React, { useEffect } from 'react'
import '../../App.css'
import EducationMain from '../EducationMain.js'

export default function Education() {
    useEffect(() => {
        document.title = 'Education';
        }, []
    );
    
    return(
        <>
            <div className='education'>
                <h1>EDUCATION</h1>
            </div>
            

            <EducationMain />
            
        </>
        
    ) 
    
}