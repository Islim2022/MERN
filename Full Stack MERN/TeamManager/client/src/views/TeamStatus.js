import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory, useParams } from 'react-router-dom';

const PlayerList = () => {
    const [players, setPlayers] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const history = useHistory();
    const {id}=useParams;
    const span = 4;

    const navigateHome = () => {
        history.push('/players/list')
    }

    const navigateToAdding = () => {
        history.push('/players/addplayer')
    }
    useEffect(() => {
        axios.get("http://localhost:8000/players/list")
            .then((res) => setPlayers(res.data));
    }, []);
    const handleClick = () => {
        setIsActive(current => !current);
        // setIsActive(true);
    };


    return (
        <div className="col-4 mx-auto">
            <h3 className='text-center'>Players Status - Game {id}</h3>
            <hr></hr>
            <button 
            className="btn btn-outline-primary margin-left1"
            onClick={navigateHome}>
                Home
            </button>
            <button 
            className="btn btn-outline-primary margin-left1"
            onClick={navigateToAdding}>
                Add a New Player
            </button>
            <hr></hr>
            <div>
            <Link to="/status/game/1">Game1</Link> | 
            <Link to="/status/game/2">Game2</Link> | 
            <Link to="/status/game/3">Game3</Link>
            </div>
            <table className="table table-striped table table-hover">
            <thead>
                <tr>
                    <td scope='col'>Player Name</td>
                    <td scope='col'>Actions</td>
                </tr>
            </thead>
            {players.map((player, i) => {
                return (
                    <tbody key={i}>
                        <tr>
                            <td>{player.name}</td>
                            <td colSpan={span}>
                                <button 
                                style={{
                                    backgroundColor: isActive ? 'green' : '',
                                    color: isActive ? 'white' : '',
                                }}
                                className="btn btn-outline-primary margin-left2"
                                onClick={handleClick}>Playing</button>
                                <button 
                                style={{
                                    backgroundColor: isActive ? 'red' : '',
                                    color: isActive ? 'white' : '',
                                }}
                                className="btn btn-outline-primary margin-left2"
                                onClick={() => {
                                    setIsActive(current => !current);}}>Not Playing</button>
                                <button 
                                style={{
                                    backgroundColor: isActive ? 'yellow' : '',
                                    color: isActive ? 'white' : '',
                                }}
                                className="btn btn-outline-primary margin-left2"
                                onClick={handleClick}>Undecided</button>

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