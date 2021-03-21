import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
const axios = require("axios");

function Challenge() {
  const history = useHistory();
  const [pokemonData, setPokemonData] = useState({
    pokemon_name: "",
    pokemon_img: "",
  });

  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);

  const [input, setInput] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(false);

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
    checkAnswer(input);
    setCounter((prevStatus) => prevStatus + 1);
    nextPokemon();
  }

  function checkAnswer(answer) {
    if (answer == pokemonData.pokemon_name) {
      setScore((prevStatus) => prevStatus + 1);
      setCorrectAnswer(true);
    }
  }

  function nextPokemon() {
    setCorrectAnswer(false);
    fetchData();
  }

  if (counter === 10) {
    history.push(`/score/${score}`);
  }

  return (
    <div>
      <p>
        Respuestas correctas: {score}/{counter}
      </p>
      <img src={pokemonData.pokemon_img} />
      <input type="text" onChange={handleChange}></input>
      <button onClick={handleClick}>Enviar</button>
      {correctAnswer && <p>respuesta correcta</p>}
    </div>
  );
}

export default Challenge;
