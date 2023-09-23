import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Creacion de los assets que se utilizaran en la aplicacion
 */
const assets = {
  empanaImage: require('./images/catempana.jpg'),
  happyGIF: require('./images/happy-happy-happy-cat.gif'),
  audioHappy: require('./audio/happysong.mp3'),
  sadGIF: require('./images/sadcat.gif'),
  audioSad: require('./audio/sadsong.mp3'),
};

const empanadaStyle = {
  margin: '0 auto',
  display: 'block',
  padding: '20px'
};

const buttonStyle = {
  fontSize: '20px',
  padding: '10px 20px',
  display: 'block',
  margin: '0 auto'
};

const App = () => {
  const [counter, setCounter] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const [isHappy, setIsHappy] = useState(false);
  const [isSad, setIsSad] = useState(false);
  const [showButton, setShowButton] = useState(false);

  /**
   * Se utiliza un useEffect para que cada segundo se incremente el contador
   * y se muestre el mensaje correspondiente
   * Si el contador llega a 10, se muestra la imagen de la empanada
   */

  useEffect(() => {
    if (showImage) { // Si ya se muestra la imagen, no se hace nada
      return;
    }

    const timer = setTimeout(() => { // Se crea un timer para que se incremente el contador cada segundo
      setCounter(prevCounter => prevCounter + 1);
    }, 1000);

    if (counter === 10) {
      setShowImage(true);
      setShowButton(true);
    }

    return () => { // Se limpia el timer 
      clearTimeout(timer);
    };
  }, [counter, showImage]);

  /**
   * Se crean dos funciones para manejar los clicks de los botones
   * Si se da click en el boton de comer empanada, se muestra la imagen de gato feliz
   * y se reproduce el audio correspondiente
   * Si se da click en el boton de no dar empanada, se muestra la imagen de gato triste
   * y se reproduce el audio correspondiente
   */

  const handleHappyClick = () => {
    setShowImage(false);
    setIsHappy(true);
    const audio = new Audio(assets.audioHappy);
    audio.loop = true;
    audio.play();
  };

  const handleSadClick = () => {
    setShowImage(false);
    setIsSad(true);
    const audio = new Audio(assets.audioSad);
    audio.loop = true;
    audio.play();
  };

  /**
   * Se muestra un mensaje dependiendo del estado de la aplicacion
   * Si el gato esta triste, se muestra un mensaje de bad ending
   * Si el gato esta feliz, se muestra un mensaje de good ending
   * Si no es ninguna de las 2, se muestra un mensaje de espera
   */

  return (
    <div style={{ backgroundColor: 'yellow', textAlign: 'center' }}>
      {isSad ? (
        <>
          <h1>BAD ENDING: No comí empanada, moriré de hambre</h1>
          <img src={assets.sadGIF} alt="Empanada" style={empanadaStyle} />
        </>
      ) : isHappy ? (

        <>
          <h1>Empanada comida, estoy feliz</h1>
          <img src={assets.happyGIF} alt="Empanada" style={empanadaStyle} />
        </>

      ) : showImage ? (

        <>
          <h1>Ya pasaron más de 10 segundos, necesito comer una empanada</h1>
          <img src={assets.empanaImage} alt="Empanada" style={empanadaStyle} />
          <button onClick={handleHappyClick} style={buttonStyle}>
            Comer empanada
          </button>
          {showButton && (
            <button onClick={handleSadClick} style={buttonStyle}>
              No dar empanada
            </button>
          )}
        </>

      ) : (
        <h1>Han pasado {counter} segundos desde que me comí una empanada</h1>
      )}
    </div>
  );
};

/**
 * Se renderiza la aplicacion en el elemento con id root
 */



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


