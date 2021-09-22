import React from 'react'
import {Cards} from '../cards/Cards'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const CardsSectionHome = () => {
    return (
        <>
          <Container>
              <div>
               <h2>Partidas en persona</h2>
               <p>Juga mano a mano con tus amigos y apostá</p>
              </div>
              <h3>Partida rápida</h3>
              <Row>
                  <Col>
                    <Cards title="Mesa de 2 jugadores" text="Jugá y apostá con tus amigos" 
                    btnLabel="Ver mesas" img="images/partida-mesa2.png"></Cards>
                  </Col>
                  <Col>
                    <Cards title="Mesa de 4 jugadores" text="Jugá y apostá con tus amigos" 
                    btnLabel="Ver mesas" img="images/partida-mesa2.png"></Cards>
                  </Col>
                  <Col>
                    <Cards title="Mesa de 6 jugadores" text="Jugá y apostá con tus amigos" 
                    btnLabel="Ver mesas" img="images/partida-mesa2.png"></Cards>
                  </Col>
              </Row>
              <h3>Partida privada</h3>
              <Row>
                  <Col>
                    <Cards title="Mesa de 2 jugadores" text="Jugá y apostá con tus amigos" 
                    btnLabel="Crear mesa" img="images/partida-mesa2.png"></Cards>
                  </Col>
                  <Col>
                    <Cards title="Mesa de 4 jugadores" text="Jugá y apostá con tus amigos" 
                    btnLabel="Crear mesa" img="images/partida-mesa2.png"></Cards>
                  </Col>
                  <Col>
                    <Cards title="Mesa de 6 jugadores" text="Jugá y apostá con tus amigos" 
                    btnLabel="Crear mesa" img="images/partida-mesa2.png"></Cards>
                  </Col>
              </Row>
          </Container>
          <img src="images/banner-cards.jpg"></img>
          <Container>
              <div>
               <h2>Torneos</h2>
               <p>Juga mano a mano con tus amigos y apostá</p>
              </div>
              <Row>
                  <Col>
                    <Cards title="Torneo rápido" text="Jugá y apostá con tus amigos" 
                    btnLabel="Ver más" img="images/partida-mesa2.png"></Cards>
                  </Col>
                  <Col>
                    <Cards title="Torneo semanal" text="Jugá y apostá con tus amigos" 
                    btnLabel="Ver más" img="images/partida-mesa2.png"></Cards>
                  </Col>
                  <Col>
                    <Cards title="Torneo clase A" text="Jugá y apostá con tus amigos" 
                    btnLabel="Ver más" img="images/partida-mesa2.png"></Cards>
                  </Col>
              </Row>
          </Container>
        </>
    )
}

