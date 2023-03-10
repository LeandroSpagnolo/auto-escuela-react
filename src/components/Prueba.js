import React, { useState } from 'react'
import { VscDebugRestart } from 'react-icons/vsc'
import preguntas from '../db/preguntas.json'

preguntas = preguntas.lista


function Prueba() {
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntaje, setPuntaje] = useState(0);

  
  
  const opcionClickeada = (esCorrecto) => {
    if (esCorrecto) {
      setPuntaje(puntaje + 1);
    }

    if (preguntaActual + 1 < preguntas.length) {
      setPreguntaActual(preguntaActual + 1);
    } else {
      setMostrarResultados(true);
    }
  };

  const mostrarPreguntas = () =>{
    return (
      <div class="lg:m-none mx-8">
        {
        preguntas.map( (pregunta,index) => {
          return (
            <div class="my-10">
              <h2 class="text-secondary font-semibold">
                Pregunta: {index + 1} de {preguntas.length}
              </h2>
              <h3 class="my-2 text-lg">{pregunta.text}</h3>
                {pregunta.options.map((option) => {
                  return (
                    <div class="form-control">
                      <label class="cursor-pointer flex gap-3 my-2 items-center">
                        <input type="radio" name={index} value="0" class="radio checked:bg-secondary focus:ml-2 transition"/>
                        <span class="label-text md:text-sm text-lg">{option.text}</span> 
                      </label>
                    </div>
                  );
                })}
            </div>
          )
        })
        }
      </div>
    )
  }

  const getIdCorrecta = (index) =>{
      preguntas[index].options.map(pregunta => {
        if(pregunta.isCorrect) {
          return pregunta.id;
        }
      })
  }


  const sumbit = () =>{
    for (var index = 0, maxLenght = preguntas.lenght; index < maxLenght; index++) {
      var radios = document.getElementsByName(index);

      for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked && i == getIdCorrecta(index)) {
          setPuntaje(puntaje+1);
        }
      }
    }

    setMostrarResultados(true);
  }
  
  


  const reiniciarJuego = () => {
    setPuntaje(0);
    setPreguntaActual(0);
    setMostrarResultados(false);
  };

  return (
    <div class="flex flex-col items-center mt-2 md:w-1/2">
      {/* Header  */}
      <h1 class="text-2xl font-semibold text-primary">Preguntas B1</h1>

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
          <div class="flex flex-col items-center">
            
            {mostrarPreguntas()}
            

            <button class="btn btn-primary px-8 mb-20">Sumbit</button>
          </div>
          
      )}
    </div>
  );
}

export default Prueba


/*

        <div>
          <h2 class="text-secondary font-semibold">
            Pregunta: {preguntaActual + 1} de {preguntas.length}
          </h2>
          <h3 class="my-2 text-lg">{pregunta.text}</h3>
          <ul>
            {pregunta.options.map((option) => {
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

*/
