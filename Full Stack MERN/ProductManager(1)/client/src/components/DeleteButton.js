import React from 'react';
import axios from 'axios';

export default props => {
    const {productId, successCallback } = props;

    const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(response => {
                successCallback();
            })
    }

    const button = ["button"]

    return (
        <button 
        onClick={deleteProduct}
        className={button.join(" ")}>
            Delete
        </button>
    )
}
