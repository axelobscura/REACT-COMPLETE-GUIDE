import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import authContext from '../../context/auth-context';

class Fruits extends Component {

  constructor(props){
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = authContext;

  componentDidMount(){
    this.inputElementRef.current.focus();
  }

  render(){
    return(
      <Aux>
        <div>
          <h1>Hola Frutas {this.props.fruta}</h1>
          <input 
            //ref={(inputEl) => {this.inputElement = inputEl}}
            ref={this.inputElementRef} 
            type="text"
          />
        </div>
      </Aux>
    )
  }
}

export default Fruits;