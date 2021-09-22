import React from 'react'
import {Cards} from '../cards/Cards'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import './CardsSectionHome.css'

export const CardsSectionHome = () => {
    return (
        <>
          <Container className="cards-home">
          <div className="title-container">
             <h2>Partidas clásicas</h2>
             <p>Jugá contra la máquina</p>
          </div>
          <Row>
             <Col lg={true}>
              <Card  className="text-center">
               <Card.Img variant="top" src="images/partida-clasica.png" />
               <Card.Body>
                 <Card.Title>Partida clásica</Card.Title>
               </Card.Body>
              </Card>
             </Col>
             <Col lg={true}>
             <Card  className="text-center">
               <Card.Img variant="top" src="images/modo-conquistador.png" />
               <Card.Body>
                 <Card.Title>Modo conquistador</Card.Title>
               </Card.Body>
              </Card>
             </Col>
            </Row>
          </Container>
          <Container className="cards-home">
              <div className="title-container">
               <h2>Partidas en persona</h2>
               <p>Juga mano a mano con tus amigos y apostá</p>
              </div>
              <div className="title-container">
               <h3>Partida rápida</h3>
              </div>
              <Row className="pb-4 pt-4">
                  <Col>
                    <Cards title="Mesa de 2 jugadores" text="Jugá y apostá con tus amigos" 
                    btnLabel="Ver mesas" img="images/partida-mesa2.png"></Cards>
                  </Col>
                  <Col>
                    <Cards title="Mesa de 4 jugadores" text="Jugá y apostá con tus amigos" 
                    btnLabel="Ver mesas" img="images/partida-mesa4.png"></Cards>
                  </Col>
                  <Col>
                    <Cards title="Mesa de 6 jugadores" text="Jugá y apostá con tus amigos" 
                    btnLabel="Ver mesas" img="images/partida-mesa6.png"></Cards>
                  </Col>
              </Row>
              <div className="title-container">
               <h3>Partida privada</h3>
              </div>
              <Row className="pb-4 pt-4">
                  <Col>
                    <Cards title="Mesa de 2 jugadores" text="Jugá y apostá con tus amigos" 
                    btnLabel="Crear mesa" img="images/partida-mesa2.png"></Cards>
                  </Col>
                  <Col>
                    <Cards title="Mesa de 4 jugadores" text="Jugá y apostá con tus amigos" 
                    btnLabel="Crear mesa" img="images/partida-mesa4.png"></Cards>
                  </Col>
                  <Col>
                    <Cards title="Mesa de 6 jugadores" text="Jugá y apostá con tus amigos" 
                    btnLabel="Crear mesa" img="images/partida-mesa6.png"></Cards>
                  </Col>
              </Row>
          </Container>
          <img src="images/banner-cards.jpg" className="banner-home"></img>
          <Container className="cards-home">
              <div className="title-container">
               <h2>Torneos</h2>
               <p>Juga mano a mano con tus amigos y apostá</p>
              </div>
              <Row className="pb-4 pt-4">
                  <Col>
                    <Cards title="Torneo rápido" text="Jugá y apostá con tus amigos" 
                    btnLabel="Ver más" img="images/torneo-diario.png"></Cards>
                  </Col>
                  <Col>
                    <Cards title="Torneo semanal" text="Jugá y apostá con tus amigos" 
                    btnLabel="Ver más" img="images/torneo-semanal.png"></Cards>
                  </Col>
                  <Col>
                    <Cards title="Torneo clase A" text="Jugá y apostá con tus amigos" 
                    btnLabel="Ver más" img="images/torneo-clase-a.png"></Cards>
                  </Col>
              </Row>
          </Container>
        </>
    )
}

