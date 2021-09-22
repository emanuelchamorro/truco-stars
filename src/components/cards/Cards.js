import React from 'react'
import Card from 'react-bootstrap/Card'
import {Button} from '../button/Button'

export const  Cards = ({title, text, btnLabel, img}) => {
    return (
        <>
        <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={img}/>
          <Card.Body>
           <Card.Title>{title}</Card.Title>
           <Card.Text>{text}</Card.Text>
          <Button>{btnLabel}</Button>
         </Card.Body>
        </Card>
        </>
    )
}

