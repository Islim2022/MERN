import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';

const People = (props) => {
    const {id} = useParams();
    const [people, setPeople] = useState({});
    useEffect(
        () => {
            axios.get('https://swapi.dev/api/people/'+ id).then(response=>{setPeople(response.data)
            console.log(response.data)
        })}, [id])
  return (
    <div>
        <h1>Name: {people.name}</h1>
        <h3>Height: {people.height}</h3>
        <h3>Mass: {people.mass}</h3>
        <h3>Hair Color: {people.hair_color}</h3>
        <h3>Skin Color: {people.skin_color}</h3>
    </div>
  )
}

export default People