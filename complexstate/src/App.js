import React, {useState} from 'react';
import History from './History';

/**
 * En React está prohibido mutar el estado directamente, por lo que se debe hacer algo como esto:
 * 
 */
const App = () => {
    
    const [left, setLeft] = useState(0)
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

    return (
        <div>
          {left}
          <button onClick={handleLeftClick}>left</button>
          <button onClick={handleRightClick}>right</button>
          {right}
          <History allClicks={allClicks} />
        </div>
      )
  }

  export default App;

