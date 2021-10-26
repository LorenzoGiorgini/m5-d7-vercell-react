import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'

export default function SingleProduct(props) {


    useEffect(() => {
        console.log(props)
    }, [])

    return (
        <div>
            <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={props.products.imageUrl} />
            <Card.Body>
                <Card.Title>{props.products.name}</Card.Title>
                <Card.Text>
                {props.products.description}
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}