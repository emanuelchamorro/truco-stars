import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Button} from '../button/Button'
import './HeroSection.css'

export const  HeroSection = ({headline, text, buttonLabel, img, bg_img }) => {
   
  
   
    return (
        <> 
             <div className="bg-img-container" style={{ background: `url(${bg_img})`}}>  
                <Container>
                  <Row>
                      <Col className="col-hero-text">
                        <h2>{headline}</h2>
                        <p>{text}</p>
                        <Button>{buttonLabel}</Button>
                      </Col>
                      <Col className="col-hero-img" >
                        <img className="img-right-hero" src={img} />
                      </Col>
                  </Row>
                </Container>
            </div>

        </>
    )
}

