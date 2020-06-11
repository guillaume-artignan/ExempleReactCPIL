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

  constructor(){
    super();
    this.state = {tab : [{prenom : "Guillaume", description : "Enseignant Formidable"},
                         {prenom : "Florence", description : "Enseignant Formidable"},
                         {prenom : "Nicolas", description : "Enseignant Formidable"}]};
  }

  render(){
    return (
      <div className="App">
        {
          this.state.tab.map((item,i)=> <Hello prenom={item.prenom}>{item.description}</Hello>)
        }
      </div>
    );
  }
  
}

export default App;
