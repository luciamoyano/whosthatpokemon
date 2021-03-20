import React from "react";
import { useState, useEffect } from "react";
const axios = require("axios");

function Challenge() {
  const [pokemonData, setPokemonData] = useState({});
  const randomIds = [];

  function getRandomId(arr) {
    while (arr.length < 10) {
      let randomNum = Math.floor(Math.random() * 100) + 1;
      if (!arr.includes(randomNum)) {
        arr.push(randomNum);
      }
    }
  }

  getRandomId(randomIds);
  console.log(randomIds);

  useEffect(() => {
    async function fetchData() {
      const pokeData = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
      setPokemonData(pokeData.data);
    }
    fetchData();
  }, []);

  console.log(pokemonData);

  return <p>Challenge page</p>;
}

export default Challenge;
