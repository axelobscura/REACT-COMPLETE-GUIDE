import React, {useState} from 'react';
import './Person.css';

const Person = (props) => {

  const [ personsState, setPersonasState ] = useState({
    personas: [
      { name: 'Laurent', age: 35},
      { name: 'Manu Chao', age: 43},
      { name: 'Constanza', age: 39}
    ]
  });

//const [otherState, setOtherState] = useState('Some other Value!!!!');

  const cambiarNombreHandler = () => {
    setPersonasState({
      personas: [
        { name: 'Lorenzo', age:17},
        { name: 'Manu Quitino', age: 53},
        { name: 'Moztaza', age: 22}
      ]
    })
  }

  return (
    <div className="Person">
      <p onClick={props.click}>My name is {props.name} and my age is {props.age}</p>
      <p>{props.children}</p>
      <hr/>
      <h2>{personsState.personas[0].name}</h2>
      <h2>{personsState.personas[1].name}</h2>
      <h2>{personsState.personas[2].name}</h2>
      <button onClick={cambiarNombreHandler}>CAMBIAR NOMBRE</button>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
};

export default Person;