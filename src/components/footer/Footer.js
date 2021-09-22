import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'
import './Footer.css'

export const Footer = () => {
    return (
        <>
         <footer className="footer-container">
             <div className="footer-top">
                <Container>
                 <div>
                  <h4>Te damos la bienvenida a la casa del truco online</h4>
                  <p>Te damos la bienvenida a TrucoStars, donde podrás disfrutar de los mejores torneos y juegos, depósitos seguros, reintegros rápidos y un software galardonado. Aquí es donde nacen los campeones y tú podrías ser el próximo. Descubre las reglas del juego y la clasificación para el Torneo A. Practica tus habilidades con dinero ficticio o únete a partidas con dinero real. No hay mejor lugar para aprender y jugar al truco.</p>
                 </div>
                 <div>
                  <h4>Los mejores torneos de truco</h4>
                  <p>TrucoStars cuenta con los mejores juegos de truco online. Partidas simples contra la maquina, salas de dos, cuatro y hasta 6 jugadores. En TrucoStars hay  torneos rapidos, torneos semanales y Torneo A .</p>
                </div>
              </Container>
            </div>
            <div className="footer-menu-container">
              <Container>
                <Row>
                 <Col>
                  <h4>Guía práctica</h4>
                   <ul>
                     <li> 
                      <Link to="/">Depósitos y reintegros</Link> 
                     </li>
                     <li> 
                      <Link to="/">Cómo jugar</Link> 
                     </li>
                     <li> 
                      <Link to="/">Ayuda</Link> 
                     </li>
                    </ul>
                  </Col>
                  <Col>
                   <h4>Información legal</h4>
                    <ul>
                       <li> 
                        <Link to="/">Términos y condiciones</Link> 
                       </li>
                       <li> 
                        <Link to="/">Política de privacidad</Link> 
                       </li>
                       <li> 
                        <Link to="/">Juego responsable</Link> 
                       </li>
                    </ul>
                   </Col>
                   <Col>
                   <h4>Contacto</h4>
                      <div className="social-share">
                        <Link to="/"><FaFacebook /></Link> 
                        <Link to="/"><FaInstagram /></Link> 
                        <Link to="/"><FaYoutube /></Link> 
                    </div>
                   </Col>
                </Row>
              </Container>
              </div>
              <div className="copyright">
               <Container>        
                 <div className="copyright-container">
                  <span>Copyright © 2001-2021, Rational Intellectual Holdings Limited. Todos los derechos reservados. </span>
                 </div>         
               </Container> 
              </div>
             </footer>
        </>
    )
}
