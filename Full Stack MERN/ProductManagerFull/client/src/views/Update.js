import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';
    
const Update = (props) => {
    const history = useHistory()
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(response => {
                setProduct(response.data);
                setLoaded(true);
            })
    }, []);

    const updateProduct = product => {
        axios.put('http://localhost:8000/api/product/' + id, product)
            .then(response => console.log(response))
    }

    // const button = ["button"];
    // const input = ["input"];
    
    return (
        <div>
            <h1>Update a Product</h1>
            {loaded && (
                <>
                <ProductForm>
                    onSubmitProp={updateProduct}
                    initialTitle={product.title}
                    initialDescription={product.description}
                    initialPrice={product.price}
                </ProductForm>
                <DeleteButton 
                    productId={product._id} 
                    successCallback={() => history.push("/")}
                />
                </>
            )}
        </div>
    )
}
    
export default Update;

