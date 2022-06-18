import React, { useState } from 'react'

const BoxGenerator = (props) => {
    const [newColor, setNewColor] = useState("");

    const addBox = (e) =>{
        e.prevenDefault();
        props.addColor(newColor)
    }


    const handleChange = (e) =>{
        setNewColor(e.target.value)
    }
    return (
    <div>
        <form onSubmit={addBox}>
            <div>
                <label>Color</label>
                <input type="text" onChange={handleChange}></input>
                <input type="submit" value="Add"></input>
            </div>
        </form>
    </div>
    )
}

export default BoxGenerator