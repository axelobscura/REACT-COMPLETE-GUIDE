import React from 'react';

const Personas = (props) => {
  return (
    <div>
      <p onClick={props.click}>I'm {props.nombre} y tengo {props.edad} años</p>
      <p>{props.children}</p>
    </div>
  )
}

export default Personas;