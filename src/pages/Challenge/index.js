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
    let n = Math.floor(Math.random() * 150);
    return n;
  }

  const id = getRandomPokemon();

  async function fetchData() {
    try {
      const pokeData = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      const pokemons = pokeData.data;
      setPokemonData({
        pokemon_name: pokemons.name,
        pokemon_img: pokemons.sprites.other.dream_world.front_default,
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleChange(e) {
    const value = e.target.value;
    setInput(value.toLowerCase());
    if (value === pokemonData.pokemon_name) {
      setCorrectAnswer(true);

      setTimeout(() => {
        setScore((prevStatus) => prevStatus + 1);
        setCounter((prevStatus) => prevStatus + 1);
        nextPokemon();
        setInput("");
      }, 1500);
    }
  }

  function handleClick() {
    setCorrectAnswer(false);
    setInput("");
    setCounter((prevStatus) => prevStatus + 1);
    setTimeout(() => {
      nextPokemon();
    }, 1500);
  }

  function nextPokemon() {
    setCorrectAnswer(false);
    fetchData();
  }

  if (counter === 10) {
    setTimeout(() => {
      history.push(`/score/${score}`);
    }, 1000);
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
      {counter < 10 && (
        <button
          className={`nes-btn main-btn ${styles.button}`}
          onClick={handleClick}
        >
          SKIP
        </button>
      )}
      {correctAnswer && (
        <p className="nes-btn is-primary">RESPUESTA CORRECTA</p>
      )}
    </div>
  );
}

export default Challenge;
