import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import empanaImage from './images/catempana.jpg';
import gifImage from './images/happy-happy-happy-cat.gif';
import audioHappy from './audio/happysong.mp3';


const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  const [counter, setCounter] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const [showGift, setShowGift] = useState(false);

  const cambiarImagen = () => {
    setShowImage(false);
    setShowGift(true);
    const audio = new Audio(audioHappy);
    audio.play();
  };

  useEffect(() => {
    // Verifica si showImage es true, en cuyo caso no hacemos nada y retornamos
    if (showImage) {
      return;
    }
  
    const timer = setTimeout(() => {

      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
    
    if (counter === 10) {
      setShowImage(true);
    }

    return () => {
      clearTimeout(timer);
    };

  }, [counter, showImage]);
  

  const rootStyle = {
    backgroundColor: 'yellow',
    textAlign: 'center',
  };

  const imageStyle = {
    margin: '0 auto',
    display: 'block',
    padding: '20px',
  };

  const buttonStyle = {
    fontSize: '20px',
    padding: '10px 20px',
    display: 'block',
    margin: '0 auto',
  };
  
  return (
    <div style={rootStyle}>
      {showGift ? (
        <>
          <h1>Empanada comida, estoy feliz</h1>
          <img src={gifImage} alt="Empanada" style={imageStyle} />
        </>
      ) : showImage ? (
        <>
          <h1>Ya pasaron más de 10 segundos, necesito comer una empanada</h1>
          <img src={empanaImage} alt="Empanada" style={imageStyle} />
          <button onClick={cambiarImagen} style={buttonStyle}>
            Comer empanada
          </button>
        </>
      ) : (
        <h1>Han pasado {counter} segundos desde que me comí una empanada</h1>
        
      )}
    </div>
  );
};

root.render(<App />);
