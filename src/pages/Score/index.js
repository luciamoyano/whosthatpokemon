import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Score.modules.scss";

function Score() {
  const { score } = useParams();
  let message = "";
  if (score < 4) {
    message = (
      <>
        <p>sos literal este</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/IfQumd_o0Gk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </>
    );
  } else if (score > 7) {
    message = <p>pokemon master</p>;
  } else {
    message = <p>ponele</p>;
  }
  return (
    <div className={styles.container}>
      <p>Respuestas correctas: {score}</p>
      {message}
    </div>
  );
}

export default Score;
