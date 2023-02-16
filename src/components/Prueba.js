import React, { useState } from 'react'
import { VscDebugRestart } from 'react-icons/vsc'

function Prueba() {
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [pregutaActual, setPreguntaActual] = useState(0);
  const [puntaje, setPuntaje] = useState(0);

  const preguntas = [
    {
      text: "Si circulo en una ruta detrás de un camión, y éste hace señas manuales y/o con la luz de giro derecha para que lo pase, ¿qué se debe hacer?",
      options: [
        { id: 0, text: "Inicio el adelantamiento con total seguridad.", isCorrect: false },
        { id: 1, text: "Espero en mi carril hasta que el camión encienda la luz de giro izquierda.", isCorrect: false },
        { id: 2, text: "Quedarse en el carril hasta que con los propios ojos se observa el camino y se comprueba que se tiene la vía libre en una distancia suficiente para evitar todo riesgo al sobrepasar.", isCorrect: true },
      ],
    },
    {
      text: "¿Qué indican las señales horizontales de líneas longitudinales continuas?",
      options: [
        { id: 0, text: "Sólo si son de color amarillo, indican que no debe ser traspasada ni se puede circular sobre ellas.", isCorrect: true },
        { id: 1, text: "Independientemente del color, amarillo o blanco, indican que no debe ser traspasada ni se puede circular sobre ellas.", isCorrect: false },
        { id: 2, text: "Indican los carriles o zonas de circulación.", isCorrect: false },
      ],
    },
    {
      text: "¿Cuál es la velocidad máxima en ciudad para un automóvil en calles?",
      options: [
        { id: 0, text: "40km/h.", isCorrect: true },
        { id: 1, text: "50km/h.", isCorrect: false },
        { id: 2, text: "60km/h.", isCorrect: false },
      ],
    },
    {
      text: "Una pick-up traslada fardos de pasto, traslada carga:",
      options: [
        { id: 0, text: "Liviana.", isCorrect: true },
        { id: 1, text: "General.", isCorrect: false },
        { id: 2, text: "Volátil.", isCorrect: false },
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
    <div class="flex flex-col items-center gap-10 m-8 md:w-1/2">
      {/* Header  */}
      <h1 class="text-2xl my-6 font-semibold text-primary">Preguntas B1</h1>

      {mostrarResultados ? (
        /* Resultado Final */
        <div class="text-center">
          <h1 class="text-xl font-semibold text-secondary m-5">Resultado Final</h1>
          <div class="text-lg font-semibold text-success m-5">
          <span class="text-4xl">{puntaje}</span> de <span class="text-4xl">{preguntas.length}</span> 
          <p>correctas</p></div>
          <h1 class="text-success text-9xl font-bold animate-pulse m-4">{(puntaje / preguntas.length) * 100}%</h1>          
          <button class="btn btn-error m-10" onClick={() => reiniciarJuego()}><VscDebugRestart size={20} class="mr-1"/>Reiniciar</button>
        </div>
      ) : (
        /*Preguntas */
        <div>
          <h2 class="text-secondary font-semibold">
            Pregunta: {pregutaActual + 1} de {preguntas.length}
          </h2>
          <h3 class="my-2 text-lg">{preguntas[pregutaActual].text}</h3>
          <ul>
            {preguntas[pregutaActual].options.map((option) => {
              return (
                <li class="flex items-center py-3 gap-3">
                  <button key={option.id}
                  onClick={() => opcionClickeada(option.isCorrect)}
                  class="btn btn-circle btn-outline btn-sm btn-secondary">

                  </button>
                  
                  <p>{option.text}</p>
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
