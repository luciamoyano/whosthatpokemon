import React from "react";
import { useState, useEffect } from "react";
const axios = require("axios");

function Challenge() {
  const [pokemonData, setPokemonData] = useState({
    pokemon_name: "",
    pokemon_img: "",
  });

  function getRandomPokemon() {
    for (let i = 0; i < 1; i++) {
      let n = Math.floor(Math.random() * 100);
      return n;
    }
  }

  const id = getRandomPokemon();

  async function fetchData() {
    const pokeData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemons = pokeData.data;
    console.log(pokemons.sprites.other.dream_world.front_default);
    setPokemonData(pokemons);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p>Challenge page</p>
    </div>
  );
}

export default Challenge;
