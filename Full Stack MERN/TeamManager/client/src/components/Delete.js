import React from 'react';
import axios from 'axios';

export default props => {
    const {playerId, successCallback } = props;

    const deletePlayer = e => {
        axios.delete('http://localhost:8000/players/' + playerId)
            .then(response => {
                successCallback();
            })
    }

    return (
        <button 
        onClick={deletePlayer}
        className="btn btn-danger ml-5">
            Delete
        </button>
    )
}