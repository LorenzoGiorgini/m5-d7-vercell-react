import React from 'react'
import SingleProduct from '../components/SingleProduct'
import {useState , useEffect } from "react"
import { Col, Container, Row } from 'react-bootstrap'

export default function Home() {
    
    const [ products , setProducts ] = useState(null)


    const fetchProducts = async () => {
        const response = await fetch(process.env.REACT_APP_BE_PRODUCTS)
        const data = await response.json()
        if(response.ok){
            setProducts(data)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        products !== null &&
        <div>
            <Container>
                <Row>
                    {
                        products.map((products) => (
                            <SingleProduct products={products} key={products._id}/>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}