import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
export default function Card(props) {
  const [onePokemon, setOnePokemon] = useState({
    name:"",
    types:[{type:{}}],
    sprites: {other:{dream_world:{front_default:""}}}

  });
     

  const getPokemon = (url) => {
    axios.get(url).then((response) => {
      console.log(response.data);
      setOnePokemon(response.data)
      
    });
  };

  const typePokemon = (url) => {
    axios.get(url).then((response) => {
      console.log(response.data);
      setOnePokemon(response.data)
      
    });
  };

  useEffect(() => {
    getPokemon(props.url);
    typePokemon(props.url);
  }, []);

  
  return (
  
  <div className="container">
    
    <div className="col-12">
      <div class="card mt-4">
        <div class="card-header text-dark">
            {onePokemon.name}
        </div>
        <div class="card-body">
        <img src={onePokemon.sprites.other.dream_world.front_default} />
          <p class="card-text text-black">
          Type: {onePokemon.types[0].type.name}
          </p>
        </div>
      </div>
    </div>
    
  </div>
  );
} 

  /*return (
    <div class="card-group">
      <div class="card">
      <img
          src={onePokemon.sprites.other["official-artwork"].front_default}
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title text-black">Card title</h5>
          <p class="card-text text-black">
           
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted"></small>
        </div>
      </div>
      <div class="card">
      <img
          src={onePokemon.sprites.other["official-artwork"].front_default}
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted"></small>
        </div>
      </div>
      <div class="card">
      <img
          src={onePokemon.sprites.other["official-artwork"].front_default}
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted"></small>
        </div>
      </div>
    </div>
  );
} */
