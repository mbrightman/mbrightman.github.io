import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Thank you for visiting!
        </p>
        <p className='footer-subscription-text'>
            [Second Placeholder Text]
        </p>
        <div className='input-areas'>
            <form>
                <input className='footer-input' type='email' name='email' placeholder='Your Email' />
                <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>About Me</h2>
                <Link to='/education'>What I learned</Link>
                <Link to='/work'>Where I've Worked</Link>
                <Link to='/skills'>My Skills</Link>
                <Link to='/skills'>Fun Projects</Link>
            </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
            <div className='footer-logo'>
                <Link to='/' className='social-logo'>
                    MB
                </Link>
            </div>
            <small className='website-rights'>MB 2023</small>
            <div className='social-icons'>
                <Link className='social-icon-link linkedin' to='https://www.linkedin.com/in/matthew-brightman/' target='_blank' aria-label='LinkedIn'>
                    <i className='fab fa-linkedin'></i>
                </Link>
                <Link className='social-icon-link github' to='https://github.com/mbrightman' target='_blank' aria-label='GitHub'>
                    <i className='fab fa-github'></i>
                </Link>
                <Link className='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'>
                    <i className='fab fa-instagram'></i>
                </Link>
                <Link className='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter'>
                    <i className='fab fa-twitter'></i>
                </Link>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Footer

// for groups of links... to create a separate COLUMN, create a new WRAPPER