import React from "react";
import Button from "../../components/Button";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.container}>
      <Button difficulty="easy" />
      <Button difficulty="medium" />
      <Button difficulty="hard" />
    </div>
  );
}

export default Home;
