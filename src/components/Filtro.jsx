/*import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Filtro(props) {
  const [tipo, setTipo] = useState({
    name: "",
    types: [{ type: {} }],
  });

  const traerTipos = (url) => {
    axios.get("https://pokeapi.co/api/v2/type/").then((response) => {
      console.log(response.data);
      setTipo(response.data);
    });
  };

  const tipos = (url) => {
    axios.get("https://pokeapi.co/api/v2/type/").then((response) => {
      console.log(response.data);
      tipo(response.data);
    });
  };

  const filtrar = (elTipo) => {
    console.log("eltipo", elTipo);
  };

  useEffect(() => {
    traerTipos(props.url);
    tipos(props.url);
  }, []);

  return (
    <>
      <div className="botonestipo">
        <button onClick={() => filtrar("borrar")}>Mostrar todos</button>
        <div className="listadoTipo">
          
        </div>
      </div>

      
    </>
  );
}

/*import React from 'react'
import { useState } from 'react'
export default function Filtro({tipos}) {

  fetchApi = async () => {
  const traerTipos = await fetch('https://pokeapi.co/api/v2/type/')
  const tipos = await traerTipos.json()
  let filtrar = (elTipo) => {
    console.log("eltipo", elTipo);
  }
  };
  
  return (
  <><div className="botonestipo">
    <button onClick={() => filtrar ("borrar")}>
      Mostrar todos
    </button>
    <div className="listadoTipo">
      {tipos.map((tipo) => {
        return (
          <button onClick={() => filtrar(tipo.name) }>
            {tipo.name}
          </button>
        )

      })}
    </div>

    </div>
    
    <h1>Tipos de Pokemon</h1></>

  )
}
*/
