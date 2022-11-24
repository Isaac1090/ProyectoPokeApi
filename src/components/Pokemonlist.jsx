import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import DisplayPokemon from './DisplayPokemon';



export default function Pokemonlist() {


    const [pokemon, setPokemon] = useState([
        {name: '', url: 'https://pokeapi.co/api/v2/pokemon/1/'}
    ])

    const getPokemons = () =>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
        .then ((response)=> {

            console.log(response.data.results);
            setPokemon(response.data.results);
        
        });
    }
    
    useEffect(() => getPokemons(),[]); //ejectuta todo lo anterior


    //return de otro componente, pasandole como prop "pokemon"
  return (
    <div>
        <DisplayPokemon pokemon={pokemon}/> 
    </div>
  )
}
