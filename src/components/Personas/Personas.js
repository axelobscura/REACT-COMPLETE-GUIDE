import React from 'react';

const Personas = (props) => {
  return (
    <div>
      <p onClick={props.click}>I'm {props.nombre} y tengo {props.edad} años</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
}

export default Personas;