import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import PlayerForm from '../components/PlayerForm'

const AddPlayer = (props) => {
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const navigateHome = () => {
        history.push('/players/list')
    }
    const addPlayer = Player => {
        axios.post("http://localhost:8000/api/player", Player)
            .then((res) => {
                alert("Player Added Successfuly")
                })
                .catch((error) => {
                    const errorResponse = error.response.data.errors;
                    const errorArr = [];
                    for (const key of Object.keys(errorResponse)) {
                      // Loop through all errors and get the messages
                        errorArr.push(errorResponse[key].message);
                    }
                    setErrors(errorArr);
                    });
    }

    const button = ["button"]

    return (
    <div className='App'>
        <h1>Add a Player</h1>
        <button 
        className={button.join(" ")}
        onClick={navigateHome}>
            Home
        </button>
        {errors.map((error, index) => (
            <p className="text-danger" key={index}>
            {error}
            </p>
        ))}
        <PlayerForm onSubmitProp={addPlayer} initialName="" initialPosition="" />
    </div>
    )
}

export default AddPlayer