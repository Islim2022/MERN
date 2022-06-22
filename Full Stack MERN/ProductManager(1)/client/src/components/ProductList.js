import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
    
const ProductList = (props) => {
    const {removeFromDom} = props;

    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/product/' + id)
            .then(res => {
                removeFromDom(id)
            })
            .catch(err => console.error(err));
    }
    const button = ["button"]
    return (
        <div>
            <h1>All Products:</h1>
            {props.product.map( (product, i) => {
                return <p key={i}>
                    <p>
                        Product Title: <Link to={"/" + product._id}>
                        {product.title}
                    </Link>
                    </p>
                    <button onClick={(e) => {deleteProduct(product._id)}}
                    className={button.join(" ")}>
                        Delete
                    </button>
                </p>
            })}
        </div>
    )
}
    
export default ProductList;