import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Personas from '../components/Personas/Personas';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[app.js] constructor');
  }

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

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidmount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
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

    console.log('[App.js] render');

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          <Persons 
            persons={this.state.persons} 
            clicked={this.deletePersonHandler} 
            changed={this.namedChangedHandler} 
          />
          
          <hr/>
          <Personas nombre="Clodomiro" edad="90" click={this.switchNameHandler.bind(this, 'Zarapatreado')} changed={this.namedChangedHandler} />
        </div>
      )
      
    }

    return (
        <div className="App">
          <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            frutas={this.state.frutas}
            clicked={this.togglePersonsHandler}
          />
          {persons}
        </div>
    );
  }
}

export default App;
