import React from 'react'
import { Button } from './Button'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            [Placeholder Text]
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
    </div>
  )
}

export default Footer
