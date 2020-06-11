import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Meteo.css';

var images = require.context('./images', true); 

class Meteo extends Component{

  constructor(){
    super();

    this.state = {};
    this.state.ville = "Lyon";
    this.state.conf = false;
    this.state.min = null;
    this.state.max = null;
    this.state.logo = logo;
  }

  componentDidMount(){
    this.loadMeteo();
  }

  loadMeteo(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+this.state.ville+"&appid=fc4347cedde9c8fe14fffac34eed3c60")
      .then((r)=> r.json())
      .then((data)=> this.meteoLoaded(data));
  }

  meteoLoaded(data){
      var min = data.main.temp_min;
      var max = data.main.temp_max;
      var icon = data.weather[0].icon;
      this.setState({"min" : Math.round(min-273.15), 
                     "max" : Math.round(max - 273.15),
                     "logo" : images("./"+icon+".png")
                    });
      
      this.setState({conf : false});
      
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
                  {this.state.conf ? null : <h2 onClick={()=> this.setState({conf : true})}>{this.state.ville}</h2>}
                  <img src={this.state.logo}></img>
                  <ul>
                    <li>Min : {this.state.min} °C</li>
                    <li>Max : {this.state.max} °C</li>
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
