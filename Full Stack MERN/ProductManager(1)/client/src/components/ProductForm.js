import React, { useState } from 'react';
import axios from 'axios';

export default props => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.length & description.length & price.length === 0) {
            return;
        }
        axios.post('http://localhost:8000/api/product', {
            title,
            description,
            price
        })
        .then(res => console.log("Response: ", res))
        .catch(err => console.log("Error: ", err))

        setTitle("");
        setDescription("");
        setPrice("");

    }

    const button = ["button"];
    const input = ["input"]

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label>Title</label>
                <input type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                className={input.join(" ")} 
                />
            </p>
            <p>
                <label>Description</label>
                <input type="text" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
                className={input.join(" ")} 
                />
            </p>
            <p>
                <label>Price</label>
                <input type="text" 
                value={price} 
                onChange={(e) => setPrice(e.target.value)}
                className={input.join(" ")} 
                />
            </p>
            <button className={button.join(" ")}>Create</button>
        </form>
    )
}