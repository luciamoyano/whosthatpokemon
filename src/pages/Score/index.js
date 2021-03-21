import React from "react";
import { useParams } from "react-router-dom";

function Score() {
  const { score } = useParams();
  let message = "";
  if (score < 4) {
    message = <p>malo malisimo terrible</p>;
  } else if (score > 7) {
    message = <p>pokemon master</p>;
  } else {
    message = <p>ponele</p>;
  }
  return (
    <>
      <p>Respuestas correctas: {score}</p>
      {message}
    </>
  );
}

export default Score;
