import React from "react";
import { useState, useEffect } from "react";
const axios = require("axios");

function Challenge() {
  const [pokemonData, setPokemonData] = useState({
    pokemon_name: "",
    pokemon_img: "",
  });

  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);

  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

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
    setPokemonData({
      pokemon_name: pokemons.name,
      pokemon_img: pokemons.sprites.other.dream_world.front_default,
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleClick() {
    setAnswer(input);
    if (answer == pokemonData.pokemon_name) {
      setScore((prevStatus) => prevStatus + 1);
    }
    setCounter((prevStatus) => prevStatus + 1);
    nextPokemon();
  }

  function nextPokemon() {
    fetchData();
  }

  console.log(answer);

  return (
    <div>
      <p>
        Respuestas correctas: {score}/{counter}
      </p>
      <img src={pokemonData.pokemon_img} />
      <p>{pokemonData.pokemon_name}</p>
      <input type="text" onChange={handleChange}></input>
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
}

export default Challenge;
