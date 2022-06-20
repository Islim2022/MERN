import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setDescription(res.data.description);
                setPrice(res.data.price);
            })
    }, []);
    
    const handleupdateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            title,
            description,
            price
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }

    const button = ["button"];
    const input = ["input"];
    
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={handleupdateProduct}>
                <p>
                    <label>Title</label>
                    <input type="text"
                    name="title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    className={input.join(" ")} 
                    />
                </p>
                <p>
                    <label>Description</label>
                    <input type="text"
                    name="description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                    className={input.join(" ")} 
                    />
                </p>
                <p>
                    <label>Price</label>
                    <input type="text"
                    name="price" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)}
                    className={input.join(" ")} 
                    />
                </p>
                <button className={button.join(" ")}>Create</button>
            </form>
        </div>
    )
}
    
export default Update;

