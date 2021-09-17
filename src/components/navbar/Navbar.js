import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes, } from 'react-icons/fa'
import {Button} from '../button/Button'
import './Navbar.css'

export const Navbar = () => {
   
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

    window.addEventListener('resize', showButton);

    return (
       <>
       <div className="navbar">
        <div className="navbar-container container">
           <Link to='/' className="navbar-logo">
             <img src="logo.png" />
           </Link>
           <div className="menu-icon" onClick= {handleClick}>
            {click ? <FaTimes /> : <FaBars />}
           </div>
           <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
            <li className= "nav-btn">
              {button ? (<Link to='/' className="btn-link"> 
               <Button buttonStyle='btn--primary'>Login</Button>
              </Link>) : (<Link to='/' className="btn-link"> 
               <Button buttonStyle='btn--primary' buttonSize='btn--mobile'>Login</Button>
              </Link>) }   
              
            </li>
            <li className= "nav-btn">
            {button ? (<Link to='/' className="btn-link"> 
               <Button buttonStyle='btn--outline'>Registrarse</Button>
              </Link>) :  (<Link to='/' className="btn-link"> 
               <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>Registrarse</Button>
              </Link>)}
            </li>
           </ul>
        </div>   
       </div>
       </>
    )
}

