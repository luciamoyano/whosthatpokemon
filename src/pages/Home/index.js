import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.container}>
      <h2>Bienvenido!</h2>
      <p>Adiviná el nombre del Pokemón y ganá!</p>
      <Link className={styles.link} to="/challenge">
        Hacé click acá para jugar
      </Link>
    </div>
    // <div className={styles.container}>
    //   <Button difficulty="easy" />
    //   <Button difficulty="medium" />
    //   <Button difficulty="hard" />
    // </div>
  );
}

export default Home;
