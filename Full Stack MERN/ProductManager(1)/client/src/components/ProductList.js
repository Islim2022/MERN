import React from 'react'
    
const ProductList = (props) => {
    return (
        <div>
            <h1>All Products:</h1>
            {props.product.map( (product, i) =>
                <p key={i}>{product.title}, {product.description}</p>
            )}
        </div>
    )
}
    
export default ProductList;