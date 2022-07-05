import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const PlayerFrom = (props) => {
    const {initialName, onSubmitProp} = props;
    const [name, setName] = useState(initialName);
    const [position, setPosition] = useState(initialName);
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();


    const navigateHome = () => {
        history.push('/players/list')
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name === '') {
            setErrorMessage("* Player Name is required.")
            return
        }
        if (name.length < 2) {
            setErrorMessage("* Player Name should be at least 2 characters.")
            return
        }

        onSubmitProp({
            name,
            position,
        });
        
        setName("");
        setPosition("");
        navigateHome();
    }

    const input = ["input"]
    const button = ["button"]

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input 
                type="text"
                placeholder='player name'
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={input.join(" ")} />
                {errorMessage && <div className="error"> {errorMessage} </div>}
                <label>Position:</label>
                <input 
                type="text"
                placeholder="player position"
                name="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className={input.join(" ")} />
                <button
                className={button.join(" ")}>
                    Add Player
                </button>
            </form>    
        </div>
    )
}
export default PlayerFrom