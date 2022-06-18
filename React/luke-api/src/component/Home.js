import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Home = (props) => {
    const [starWars, setStarWars] = useState("");
    const [starWarId, setStarWarId] = useState("");
    const history = useHistory();

    const handleChange = (e) => {
        setStarWars(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/"+starWars+"/"+starWarId)
    }

    const handleId = (e) => {
        setStarWarId(e.target.value);
    }

    const buttonStyle = ["button"]
    const inputStyle = ["input"]

  return (
    <div>
        <form onSubmit={(e) => {
            handleSubmit(e)
        }}>
            <div style={{marginBottom: "20px"}}>
                <label style={{marginRight:"20px"}}>Search for:</label>
                <select className={buttonStyle.join(" ")} 
                        onChange={(e) => {
                            handleChange()
                        }}>
                            <option key={1} value="people">People</option>
                            <option key={2} value="Planets">Planets</option>
                </select>
            </div>
            <div>
                <label style={{marginRight: "10px"}}>ID: </label>
                <input type="text" 
                        onChange={(e) => {
                            handleId(e)
                        }} 
                        className={inputStyle.join(" ")}/>
            </div>
                <button className={buttonStyle.join(" ")}>Search</button>
        </form>
    </div>
    )
}

export default Home