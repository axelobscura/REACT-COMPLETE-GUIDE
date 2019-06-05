import React, {useEffect} from 'react';
import classes from './Cockpit.css';
import Fruits from '../Fruits/Fruits';

const cockpit = (props) => {

  useEffect(() => {
    console.log('[Cockpit.js] Use effect like this');
    setTimeout(()=>{
      alert('Saved data to cloud!!!');
    }, 1000);
    return()=>{
      console.log('[Cockpit.js] Clean up effect')
    };
  }, []);

  useEffect(()=>{
    console.log('[Cockpit.js] Use 2nd effect');
    return()=>{
      console.log('[Cockpit.js] Clean up 2nd effect')
    };
  });

  const style = {
    backgroundColor: 'green',
    color:'#fff',
    font: 'inherit',
    fontSize: '2rem',
    border: '1px solid blue',
    padding: '10px',
    borderRadius: '10px',
    cursor: 'pointer',
    textTransform: 'uppercase',
    marginBottom: '20px',
    ':hover': {
      backgroundColor: 'lightgreen',
      color: '#000'
    }
  };

  
  const assignedClasses = [];
  let btnClass = '';

  if(props.showPersons){
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1 style={style}>{props.title}</h1>
      <p className={btnClass}>This is really working</p>
      {props.frutas.map((fruta, index) => {
        return (
          <Fruits fruta={fruta.nombre} click={this.frutero} key={index} />
        )
      })}

      <button onClick={props.clicked} style={{ marginBottom: '30px' }}>Toggle Persons</button>
    </div>    
  );
}

export default cockpit;