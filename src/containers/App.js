import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Personas from '../components/Personas/Personas';
//import Aux from '../hoc/Aux';
//import withClass from '../hoc/WithClass';
import AuthContext from '../context/auth-context';

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
    showCockpit: true,
    frutas: [
      { id: '1', nombre: 'Papaya' },
      { id: '2', nombre: 'Melon' },
      { id: '3', nombre: 'Sandia' }
    ],
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidmount');
  }
  /*
  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    if(nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked){
      return true;
    } else {
      return false;
    }
  }
*/
  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

  componentWillUnmount(){
    console.log('[App.js] componentWillUnmount');
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

    this.setState((prevState, props) => {
      return {
        persons: persons, 
        changeCounter: prevState.changeCounter + 1
      }
    });
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

  loginHandler = () => {
    this.setState({authenticated: true});
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
            isAuthenticated={this.state.authenticated}
          />
          
          <hr/>
          <Personas nombre="Clodomiro" edad="90" click={this.switchNameHandler.bind(this, 'Zarapatreado')} changed={this.namedChangedHandler} />
        </div>
      )
      
    }

    return (
        <div className="App">
          <button onClick={()=>{this.setState({showCockpit: false})}}>Remove Cockpit</button>
          <AuthContext.Provider value={{
            authenticated: this.state.authenticated, 
            login: this.loginHandler
            }}>
            {this.state.showCockpit ?
            <Cockpit 
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              frutas={this.state.frutas}
              clicked={this.togglePersonsHandler}
            /> : null }
            {persons}
          </AuthContext.Provider>
        </div>
    );
  }
}

export default App;
