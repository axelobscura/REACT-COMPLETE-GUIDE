import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Personas from './Personas/Personas';

class App extends Component {
  state = {
    persons: [
      { name: 'Axel', age: 28},
      { name: 'Manu', age: 27},
      { name: 'Stephanie', age: 35}
    ],
    otherState: 'Some other value',
    showPersons: false
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

  namedChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Axel', age: 35},
        { name: event.target.value, age: 43},
        { name: 'Constanza', age: 39}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }
  
  render() {
    const style = {
      backgroundColor: '#fff',
      font: 'inherit',
      border: '1px solid blue',
      padding: '10px',
      borderRadius: '10px',
      cursor: 'pointer',
      marginBottom: '20px'
    };

    return (
      <div className="App">
        <h1>THE PERSONS APP</h1>
        <button onClick={this.togglePersonsHandler} style={{marginBottom: '30px'}}>Toggle Persons</button>

            <div>
              <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Hola Tomatero</Person>
              <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
              <Person name="Pedro" age="45" />
              <Person name="Luisa" age="55" />
              <hr/>
              <Personas nombre="Clodomiro" edad="90" click={this.switchNameHandler.bind(this, 'Zarapatreado')} changed={this.namedChangedHandler} />
            </div> : null
      </div>
    );
  }
}

export default App;
