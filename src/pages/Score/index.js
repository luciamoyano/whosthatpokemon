import React from "react";
import { useParams } from "react-router-dom";
import "./style.scss";

import lowscore from "../../assets/meme/lowScore.mp4";

function Score() {
  const { score } = useParams();
  let message = "";
  if (score < 4) {
    message = (
      <div>
        <h3 className="title">No tenés idea</h3>
        <video width="500" height="315" controls autoplay>
          <source src={lowscore} />
        </video>
      </div>
    );
  } else if (score > 7) {
    message = <p>pokemon master</p>;
  } else {
    message = <p>ponele</p>;
  }
  return (
    <div className="container">
      <p>Respuestas correctas: {score}</p>
      {message}
      <h3 className="gracias">¡GRACIAS POR JUGAR!</h3>
    </div>
  );
}

export default Score;
