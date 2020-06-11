import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Meteo.css';

class Meteo extends Component{

  constructor(){
    super();

    this.state = {};
    this.state.ville = "Lyon";
    this.state.conf = false;
  }

  loadMeteo(){
    
  }


  render(){
    var style = {opacity : 1};
    if (this.state.conf)
    style = {opacity : 0.2};

    return <div className="Meteo">
              {this.state.conf ?  <div>
                                    <input  onChange = {(e)=> this.setState({"ville":e.target.value})}
                                            value={this.state.ville}></input>
                                    <button onClick={()=>this.loadMeteo()}>Configure</button>
                                  </div>
                                  :null}
              
              
              <div style={style} >
                  {this.state.conf ? null : <h2 onClick={()=> this.setState({conf : true})}>Lyon</h2>}
                  <img src={logo}></img>
                  <ul>
                    <li>Temperature Min : </li>
                    <li>Temperature Max : </li>
                  </ul>
              </div>
            </div>;
  }
}


class Hello extends Component{
  constructor(){
    super();
    this.state = {visible : false};
  }

  componentDidMount(){
    console.log("DID MOUNT");
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
          this.state.tab.map((item,i)=> <Hello key={i} prenom={item.prenom}>{item.description}</Hello>)
        }
        <Meteo></Meteo>
      </div>
    );
  }
  
}

export default App;
