import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';

const Planets = (props) => {
    const {id} = useParams();
    const [planet, setPlanet] = useState({})
    useEffect(
        () => {
            axios.get('https://swapi.dev/api/planets/'+ id)
            .then(response=>{setPlanet(response.data)
            console.log(response.data)
        })}, [id])
  return (
    <div>
        <h1>Name: {planet.name}</h1>
        <h3>Climate: {planet.climate}</h3>
        <h3>Terrain: {planet.terrain}</h3>
        <h3>Surface Water: {planet.surface_water?<label>True</label>:<label>No</label>}</h3>
        <h3>Population: {planet.population}</h3>
    </div>
  )
}

export default Planets