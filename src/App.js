import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Personas from './Personas/Personas';
import Fruits from './Fruits/Fruits';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Axel', age: 28},
      { id: '2', name: 'Manu', age: 27},
      { id: '3', name: 'Stephanie', age: 35}
    ],
    otherState: 'Some other value',
    showPersons: false,
    frutas: [
      { id: '1', nombre: 'Papaya' },
      { id: '2', nombre: 'Melon' },
      { id: '3', nombre: 'Sandia' }
    ]
  }

  switchNameHandler = (newName)=>{
    //console.log("was clicked!!!");
    //DON´T DO THIS -> this.state.persons[0].name = "Laurent";
    this.setState({
      persons: [
        { name: newName, age: 35},
        { name: 'Manu Chao', age: 43},
        { name: 'Constanza', age: 39}
      ]
    })
  }

  namedChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //const person = Object.assign({}, this.state.persons[personIndex])

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  frutero = () => {
    console.log('frutas');
  }
  
  render() {
    const style = {
      backgroundColor: 'green',
      color:'#fff',
      font: 'inherit',
      border: '1px solid blue',
      padding: '10px',
      borderRadius: '10px',
      cursor: 'pointer',
      marginBottom: '20px'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person 
                click={() => this.deletePersonHandler(index)} 
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event) => this.namedChangedHandler(event, person.id)}>
                  {person.name}
              </Person>
            )
          })}
          
          <hr/>
          <Personas nombre="Clodomiro" edad="90" click={this.switchNameHandler.bind(this, 'Zarapatreado')} changed={this.namedChangedHandler} />
        </div>
      )
      style.backgroundColor = 'red';
    }

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1 style={style}>THE PERSONS APP</h1>
        <p className={classes.join(' ')}>This is really working</p>
        {this.state.frutas.map((fruta, index) => {
          return(
            <Fruits fruta={fruta.nombre} click={this.frutero} key={index} />
          )
        })}
        
        <button onClick={this.togglePersonsHandler} style={{marginBottom: '30px'}}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
