import React from 'react'
import React,{useState} from 'react'

const Api = (props) => {
    const[pokemon,setPokemon] = useState([]);
    // const result=
    //     () => {
    //         fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    //             .then(response => response.json())
    //             .then(response => setPeople(response.results))

    //     }
    const result = () =>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then(response=>setPokemon(response.results))
    }
    return (
    <div>
        <button type="submit" onClick={result} >click me</button>
        <div>
        {pokemon.length > 0 && pokemon.map((person, index) =>{
            return (<div key={index}>{person.name}</div>)
        })}
        </div>
    </div>
    )
}

export default Api