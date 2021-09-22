import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes, } from 'react-icons/fa'
import {Button} from '../button/Button'
import Container from 'react-bootstrap/Container'
import NavDropdown  from 'react-bootstrap/NavDropdown'
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
       <div className="t-navbar">
        <Container>
        <div className="t-navbar-container">
           <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
             <img src="logo.png" />
           </Link>
           <div className="menu-icon" onClick= {handleClick}>
            {click ? <FaTimes /> : <FaBars />}
           </div>
           <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
           <div className= {!button ? 'nav-menu-top-links active' : 'nav-menu-top-links'}> 
           <li className= "nav-item">
             <Link to='/' className="nav-links">
               Inicio
            </Link>
           </li>
           <li className= "nav-item">
             <Link to='/como-jugar' className="nav-links" onClick={closeMobileMenu}>
               Como jugar
            </Link>
           </li>
           <li className= "nav-item">
             <Link to='/depositos' className="nav-links" onClick={closeMobileMenu}>
              Depositos y reintegros
            </Link>
           </li>
           <li className= "nav-item">
             <Link to='/torneos' className="nav-links" onClick={closeMobileMenu}>
               Torneos
            </Link>
           </li>
           <li className= "nav-item">
             <Link to='/' className="nav-links" onClick={closeMobileMenu}>
               Partidas
            </Link>
           </li>
           </div>
           <li className= "nav-btn">
              {button ? (<Link to='/' className="t-btn-link" onClick={closeMobileMenu}> 
               <Button buttonStyle='btn--primary'>Login</Button>
              </Link>) : (<Link to='/' className="t-btn-link" onClick={closeMobileMenu}> 
               <Button buttonStyle='btn--primary' buttonSize='btn--mobile'>Login</Button>
              </Link>) }    
            </li>
            <li className= "nav-btn">
            {button ? (<Link to='/' className="t-btn-link" onClick={closeMobileMenu}> 
               <Button buttonStyle='btn--outline'>Registrarse</Button>
              </Link>) :  (<Link to='/' className="t-btn-link" onClick={closeMobileMenu}> 
               <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>Registrarse</Button>
              </Link>)}
            </li>
           </ul>
        </div> 
        </Container> 
       </div>
        {button ? ( <div className="t-bottom-navmenu">
        <Container>
         <ul className="t-bottom-navbar-container">
         <li className= "nav-item">
             <Link to='/' className="nav-links">
               Inicio
            </Link>
           </li>
           <li className= "nav-item">
             <Link to='/' className="nav-links">
               Como jugar
            </Link>
           </li>
           <li className= "nav-item">
             <Link to='/' className="nav-links">
               Depositos y reintegros
            </Link>
           </li>
           <li className= "nav-item">
           <Link to='/' className="nav-links submenu">
               Torneos
               <div className='t-menu-dropdown'>
                <Link to='/' className="nav-links">Torneo rápido</Link>
                <Link to='/' className="nav-links">Torneo semanal</Link>
                <Link to='/' className="nav-links">Torneo clase A</Link>
               </div>
            </Link>
           </li>
           <li className= "nav-item" >
            <Link to='/' className="nav-links submenu">
               Partidas
              <div className='t-menu-dropdown'>
                <Link to='/' className="nav-links">Partida clásica</Link>
                <Link to='/' className="nav-links">Modo conquistador</Link>
                <Link to='/' className="nav-sublinks">Partida rápida  
                  <div className= "t-submenu-dropdown">
                   <Link to='/' className="nav-links">Mesa de 2</Link>
                   <Link to='/' className="nav-links">Mesa de 4</Link>
                   <Link to='/' className="nav-links">Mesa de 6</Link>
                  </div>
                </Link>
                <Link to='/' className="nav-sublinks">Partida privada  
                  <div className= "t-submenu-dropdown">
                   <Link to='/' className="nav-links">Mesa de 2</Link>
                   <Link to='/' className="nav-links">Mesa de 4</Link>
                   <Link to='/' className="nav-links">Mesa de 6</Link>
                  </div>
                </Link>
              </div>
           </Link>
           </li>
         </ul>
        </Container>
        </div>) : ''}
       </>
    )
}

