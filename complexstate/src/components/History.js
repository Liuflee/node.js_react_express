import React from 'react';

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        Esta aplicación se utiliza pulsando los botones
      </div>
    )
  }

  return (
    <div>
      Historial: {props.allClicks.join(' ')}
    </div>
  )
}

export default History;