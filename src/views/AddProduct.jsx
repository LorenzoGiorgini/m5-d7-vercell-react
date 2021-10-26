
import Button from 'react-bootstrap/Button'
import React from 'react'
import { useEffect , useState } from 'react'
import { Container, Form } from 'react-bootstrap'

export default function AddProduct() {


    const [ newProduct , setNewProduct] = useState({
        name: "",
        description: "",
        brand: "",
        imageUrl: "",
        price: null,
        category: ""
    })


    const [ image , setImage ] = useState({})


    const handleInput = (propertyName, value) => {
        setNewProduct({
            ...newProduct,
            [propertyName]: value
        });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        // now how can we access the form input value?
        try {
            let response = await fetch(
            process.env.REACT_APP_BE_PRODUCTS,
            {
                method: "POST",
                body: JSON.stringify(newProduct),
                headers: {
                "Content-type": "application/json",
                },
            }
            );
            console.log(response);
            if (response.ok) {
            let data = await response.json()
            console.log(data)
            try {
                let formData = new FormData();
        
                formData.append("imageUrl", image);
                let response = await fetch(process.env.REACT_APP_BE_PRODUCTS + `/${data._id}/uploadImage`,
                {
                    method: "POST",
                    body: formData
                }
                );
                if(response.ok) {
                console.log(response)
                }
            } catch (error) {
                console.log(error);
            }
            setNewProduct({
                name: "",
                description: "",
                brand: "",
                imageUrl: "",
                price: null,
                category: ""
            });
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div>
            <Container className="new-blog-container">
                <Form className="mt-5">
                <Form.Group controlId="blog-form" className="mt-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                    size="lg" 
                    placeholder="Insert Name" 
                    onChange={e => handleInput('name', e.target.value)}
                    value={newProduct.name}
                    type="text"
                    />
                </Form.Group>
                <Form.Group controlId="blog-category" className="mt-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                    placeholder="Insert Description" 
                    onChange={e => handleInput('description', e.target.value)}
                    value={newProduct.description}
                    type="text"
                    size="lg" 
                    />
                    
                </Form.Group>
                <Form.Group controlId="blog-content" className="mt-3">
                    <Form.Label>Product Brand</Form.Label>
                    <Form.Control
                    onChange={e => handleInput('brand', e.target.value)}
                    value={newProduct.brand}
                    placeholder="Insert Brand"
                    type="text"
                    size="lg"
                    />
                </Form.Group>
                <input type="file" onChange={(e) => setImage(e.target.files[0])}/>
                <Form.Group controlId="blog-content" className="mt-3">
                    <Form.Label>Product Brand</Form.Label>
                    <Form.Control
                    onChange={e => handleInput('price', e.target.value)}
                    value={newProduct.price}
                    placeholder="Insert Price"
                    type="number"
                    size="lg"
                    />
                </Form.Group>
                <Form.Group controlId="blog-category" className="mt-3">
                <Form.Label>Category</Form.Label>
                    <Form.Control 
                    size="lg" 
                    as="select" 
                    onChange={e => handleInput('category', e.target.value)}
                    value={newProduct.category}
                    >
                    <option>Television</option>
                    <option>Smartphone</option>
                    <option>Computer</option>
                    <option>Tablet</option>
                    <option>Book</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="d-flex mt-3 justify-content-end">
                    <Button 
                    variant="outline-primary"
                    size="lg"
                    >
                        Reset
                    </Button>
                    <Button 
                    variant="primary"
                    type="submit"
                    size="lg"
                    style={{ marginLeft: "1em" }}
                    onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </Form.Group>
                </Form>
            </Container>
        </div>
    )
}