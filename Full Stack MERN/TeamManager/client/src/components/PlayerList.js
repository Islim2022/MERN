import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Delete from './Delete';
import { useHistory } from 'react-router-dom';

const PlayerList = () => {
    const [players, setPlayers] = useState([]);
    const history = useHistory();

    const navigateToAdding = () => {
        history.push('/players/addplayer')
    }
    const navigateToStatus = () => {
        history.push('/status/game/${id}')
    }
    useEffect(() => {
        axios.get("http://localhost:8000/players/list")
            .then((res) => setPlayers(res.data));
    }, []);

    const removeFromDom = (playerId) => {
        setPlayers(players.filter((player) => player._id != playerId));
        alert("Player deleted successfully!")
    };

    return (
        <div className="col-4 mx-auto">
            <h3 className='text-center'>Players List</h3>
            <hr></hr>
            <button 
            className="btn btn-outline-primary margin-left"
            onClick={navigateToAdding}>
                Add a New Player
            </button>
            <button 
            className="btn btn-outline-primary margin-left"
            onClick={navigateToStatus}>
                Manage Player Status
            </button>
            <hr></hr>
            <table className="table table-striped table table-hover">
            <thead>
                <tr>
                    <td scope='col'>Player Name</td>
                    <td scope='col'>Preferred Position</td>
                    <td scope='col'>Actions</td>
                </tr>
            </thead>
            {players.map((player, i) => {
                return (
                    <tbody key={i}>
                        <tr>
                            <td>{player.name}</td>
                            <td>{player.position}</td>
                            <td>
                            <Delete
                            playerId={player._id} 
                            successCallback={() => removeFromDom(player._id)}
                            />
                            </td>
                        </tr>
                    </tbody>
                );
            })}
        </table>
        </div>
    )
}

export default PlayerList