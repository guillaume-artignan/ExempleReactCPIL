import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Hello extends Component{
  constructor(){
    super();
    this.state = {visible : false};
  }

  modif(){
    var display = this.state.visible;
    this.setState({visible : !display});
  }

  render(){
    if (this.state.visible)
    var p = <p>{this.props.children}</p>;

    return <div>
        <h1 onClick={()=>this.modif()} >Hello {this.props.prenom}</h1>
        {p}
      </div>;
  }
}



class App extends Component {
  render(){
    return (
      <div className="App">
        <Hello prenom="Guillaume">
           Enseignant <b>formidable</b> de l'IPI
        </Hello>
        <Hello prenom="Estelle"></Hello>
        <Hello prenom="Corentin"></Hello>
      </div>
    );
  }
  
}

export default App;
