import React, { useState } from 'react'

function Prueba() {
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [pregutaActual, setPreguntaActual] = useState(0);
  const [puntaje, setPuntaje] = useState(0);

  const preguntas = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, text: "1787", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1774", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
  ];

  const opcionClickeada = (esCorrecto) => {
    if (esCorrecto) {
      setPuntaje(puntaje + 1);
    }

    if (pregutaActual + 1 < preguntas.length) {
      setPreguntaActual(pregutaActual + 1);
    } else {
      setMostrarResultados(true);
    }
  };


  const reiniciarJuego = () => {
    setPuntaje(0);
    setPreguntaActual(0);
    setMostrarResultados(false);
  };

  return (
    <div>
      {/* Header  */}
      <h1>Preguntas B1</h1>

      {mostrarResultados ? (
        /* Resultado Final */
        <div>
          <h1>Resultado Final</h1>
          <h2>
            {puntaje} de {preguntas.length} correctas - (
            {(puntaje / preguntas.length) * 100}%)
          </h2>
          <button onClick={() => reiniciarJuego()}>Reiniciar el juego</button>
        </div>
      ) : (
        /*Preguntas */
        <div>
          <h2>
            Pregunta: {pregutaActual + 1} de {preguntas.length}
          </h2>
          <h3>{preguntas[pregutaActual].text}</h3>
          <ul>
            {preguntas[pregutaActual].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => opcionClickeada(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Prueba
