import React from 'react';
import Aux from '../../hoc/Aux';

const Fruits = (props) => {
  return(
    <Aux>
      <div>
        <h1>Hola Frutas {props.fruta}</h1>
      </div>
    </Aux>
  )
}

export default Fruits;