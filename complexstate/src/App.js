import React, {useState} from 'react';
import History from './components/History';
import Button from './components/Button';
import './styles/containerStyle.css';

/**
 * En React está prohibido mutar el estado directamente, por lo que se debe hacer algo como esto:
 * 
 */
const App = () => {

  const [left, setLeft] = useState(0) // Los hooks no pueden estar dentro de condicionales, bucles o funciones
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  
  
  const handleLeftClick = () => {
    setAll(allClicks.concat('L')) // concat devuelve un nuevo array con los elementos concatenados
    setLeft(left + 1)
  }


  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  const handleResetClick = () => {
    setAll([])
    setLeft(0)
    setRight(0)
  }

  return (
    <div className="container">
      <div className="button-container">
        {left}
        <Button onClick={handleLeftClick} text='Izquierda' />
        <Button onClick={handleRightClick} text='Derecha' />
        {right}
        <Button onClick={handleResetClick} text='Reiniciar' />
      </div>
      <div className="history-container">
        <History allClicks={allClicks} />
      </div>
    </div>
  );
}
export default App;

