import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card } from 'react-bootstrap'

export default function SingleProduct(props) {

    return (
        <div>
            <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={props.products.imageUrl} />
            <Card.Body>
                <Card.Title>{props.products.name}</Card.Title>
                <Card.Text>
                {props.products.description}
                </Card.Text>
                <a href={process.env.REACT_APP_BE_PRODUCTS + `/${props.products._id}/downloadPDF`}>Download</a>
            </Card.Body>
            </Card>
        </div>
    )
}