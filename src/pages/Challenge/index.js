import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Challenge.module.scss";
import "../../../node_modules/nes.css/css/nes.css";

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
    let n = Math.floor(Math.random() * 100);
    return n;
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
    setTimeout(() => {
      nextPokemon();
      setInput("");
    }, 3000);
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

  function revealPokemon() {}

  if (counter === 10) {
    history.push(`/score/${score}`);
  }

  return (
    <div className={styles.container}>
      <p>
        Respuestas correctas: {score}/{counter}
      </p>
      <img
        className={`${
          correctAnswer ? styles.showPokemon : styles.hidePokemon
        } ${styles.pokeimg}`}
        src={pokemonData.pokemon_img}
        alt="You should guess the Pokemon"
      />
      <input
        type="text"
        className="nes-input"
        onChange={handleChange}
        value={input}
      ></input>
      <button className="nes-btn main-btn" onClick={handleClick}>
        Enviar
      </button>
      {correctAnswer && <p className="is-success">respuesta correcta</p>}
    </div>
  );
}

export default Challenge;
