import React from 'react'
import './Button.css' 

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile']


export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0]
    

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}>{children}</button>
    )
}