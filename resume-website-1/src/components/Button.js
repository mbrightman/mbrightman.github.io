import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

//primary has a background, outline has no background
const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    // if the button ALREADY includes a button style, use that. Otherwise, just use the FIRST entry in our STYLES array
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return(
        <Link to='/' className='btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    )
}

// explaining "{children}": essentially just represents whatever we want to show as our button text/etc.
// EX: <Button>Get Started</Button> - Get Started = {children}