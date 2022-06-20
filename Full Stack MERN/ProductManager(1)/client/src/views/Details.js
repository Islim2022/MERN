import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

const Details = (props) => {
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect (() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => setPerson(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <p>Product Title: {product.title}</p>
            <p>Product Description: {product.description}</p>
            <p>Product Price: {product.price}</p>
            <hr />
            <Link to={"/product/" + product._id + "/edit"}>
                Edit
            </Link>
        </div>

    )
}

export default Details;
