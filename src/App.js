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
    otherState: 'Some other value'
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
  
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a Axel</h1>
        <button onClick={() => this.switchNameHandler('Tutifruti')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Hola Tomatero</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name="Pedro" age="45" />
        <Person name="Luisa" age="55" />
        <hr/>
        <Personas nombre="Clodomiro" edad="90" click={this.switchNameHandler.bind(this, 'Zarapatreado')} />
      </div>
    );
  }
}

export default App;
