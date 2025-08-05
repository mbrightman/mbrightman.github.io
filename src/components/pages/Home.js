import React, { useEffect } from 'react'
import '../../App.css'
import MainSection from '../MainSection'
import Cards from '../Cards'

function Home () {
    useEffect(() => {
        document.title = 'Matthew Brightman';
        }, []
    );
    
    return (
        <>
            <MainSection />
            <Cards />
        </>
    )
}

export default Home