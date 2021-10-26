import React from 'react'
import { useEffect , useState } from 'react'
import { Form } from 'react-bootstrap'

export default function AddProduct() {


    const [ newProduct , setNewProduct] = useState({
        name: "",
        description: "",
        brand: "",
        imageUrl: "",
        price: null,
        category: ""
    })

    return (
        <div>
            
        </div>
    )
}