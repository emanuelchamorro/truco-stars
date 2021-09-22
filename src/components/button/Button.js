import React from 'react'
import './Button.css' 

const STYLES = ['btn--primary', 'btn--secondary', 'btn--outline']

const SIZES = ['btn--desktop', 'btn--mobile']

const ALIGN = ['', 'm-auto']

export const Button = ({children, type, onClick, buttonStyle, buttonSize, btnAlignment}) => {
    
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    const checkButtonAlignment = ALIGN.includes(btnAlignment) ? btnAlignment : ALIGN[0]

    return (
        <button className={`t-btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonAlignment}`}>{children}</button>
    )
}