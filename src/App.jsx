import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import './App.css';

function App() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const photos = ['Valen1.jpeg', 'Valen2.jpeg', 'Valen3.jpeg', 'Valen4.jpeg', 'Valen4.jpeg']; 
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const intervalId = setInterval(() => {
      setCurrentPhotoIndex(prevIndex => (prevIndex + 1) % photos.length);
    }, 3000); // Cambia la foto cada 3 segundos (3000 milisegundos)

    setTimeout(() => {
      setIsTransitioning(false);
    }, 10000); 

    return () => clearInterval(intervalId);
  }, [photos.length]);

  return (
    <div className="App">
      {isTransitioning && <Confetti />}
      <header className="App-header">
        <h1>Feliz Cumpleaños, <span>Valen!</span></h1>
        <img
          src={photos[currentPhotoIndex]}
          alt="Varias Imagenes de valen"
          className="fade-in"
        />
        <p className='blanco'>Hola Valen feliz cumpleaños. Te amo mucho, eres la persona más especial en mi vida espero que hoy la pases muy bien <span>FELIZ DÍA</span></p>
        <p className='blanco'>¡Te amo mucho!</p>
        <img
          src="icegif-109.gif"
          alt="GIF bonito"
          className="gif"
        />
      </header>
    </div>
  );
}

export default App;
