import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Hello extends Component{
  render(){
    return <div>
        <h1>Hello {this.props.prenom}</h1>
        <p>{this.props.children}</p>
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
