import React from 'react'
import React,{useState} from 'react'

const Api = (props) => {
    const[people,setPeople]=useState([]);
    const result=
        () => {
            fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
                .then(response => response.json())
                .then(response => setPeople(response.results))

        }
    return (
    <div>
        <button type="submit" onClick={result} >click me</button>
        <div>
        {people.length > 0 && people.map((person, index) =>{
            return (<div key={index}>{person.name}</div>)
        })}
        </div>
    </div>
    )
}

export default Api