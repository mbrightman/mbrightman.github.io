import React, { useEffect } from 'react'
import '../../App.css'
import WorkMain from '../WorkMain.js'

export default function Work() {
    useEffect(() => {
        document.title = 'Work Experience';
        }, []
    );
    
    return(
        <>
            <div className='work'>
                <h1>WORK</h1>
            </div>
            

            <WorkMain />
            
        </>
        
    )
}