import React from "react";
import { Link, useParams } from "react-router-dom";
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
    message = <h2 className="title">POKEMON MASTER</h2>;
  } else {
    message = <p>ponele, algo de idea tenés...</p>;
  }
  return (
    <div className="container">
      <p>Respuestas correctas: {score}</p>
      {message}
      <h3 className="gracias">¡GRACIAS POR JUGAR!</h3>
      <Link className="link-inicio" to="/">
        Regresar al Inicio
      </Link>
    </div>
  );
}

export default Score;
