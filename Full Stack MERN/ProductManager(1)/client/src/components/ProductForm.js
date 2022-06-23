import React, { useState } from 'react';
import axios from 'axios';

export default props => {
    const { initialTitle, initialDescription, initialPrice, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle);
    const [description, setDescription] = useState(initialDescription);
    const [price, setPrice] = useState(initialPrice);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.length & description.length & price.length === 0) {
            return;
        }

        onSubmitProp({
            title,
            description,
            price
        });

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
    )
}