import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css' 
import { Button } from './Button'


function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false)
    } else {
        setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                    MB
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/education' className='nav-links' onClick={closeMobileMenu}>
                            Education
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/work' className='nav-links' onClick={closeMobileMenu}>
                            Work Experience
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/skills' className='nav-links' onClick={closeMobileMenu}>
                            Skills & Projects
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar

// "Link" is for the logo on the navbar (could use a pic as well)
// For a logo from FontAwesome: "<i classname="fab fa-typo3"></i>
// Can include one more <li> piece that has same code but links to Sign Up