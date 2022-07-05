import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';
    
const ProductList = (props) => {
    const [ product, setProduct] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(response => setProduct(response.data))
    }, [])

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId))
    }
    const button = ["button"]
    return (
        <div>
            <h1>All Products:</h1>
            {props.product.map( (product, i) => {
                return <ul key={i}>
                    <li>
                        Product Title: <Link to={"/" + product._id}>
                        {product.title}
                    </Link>
                    </li>
                    <p>
                        <Link to={"/" + product._id + "/edit"}>
                        Edit
                        </Link>
                    </p>
                    <DeleteButton 
                    productId={product._id}
                    successCallback={() => removeFromDom(product._id)}
                    />
                </ul>
            })}
        </div>
    )
}
    
export default ProductList;