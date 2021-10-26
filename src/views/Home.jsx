import React from 'react'
import SingleProduct from '../components/SingleProduct'
import {useState , useEffect } from "react"

export default function Home() {
    
    const [ products , setPorducts ] = useState([])


    const fetchProducts = async () => {
        const response = await fetch(process.env.REACT_APP_BE_PRODUCTS_GET)
        const data = await response.json()
        if(response.ok){
            setPorducts(data)
        }
    }

    useEffect(() => {
        fetchProducts()
    })

    return (
        products &&
        <div>
            {
                console.log(products)
            }
        </div>
    )
}
