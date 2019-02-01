import React, { Component } from 'react';
import './App.css';
import Material from './Components/Material';

class App extends Component {
  state = {
    Material:[
      {name: '', amount: '', amountPrepared: ''}
    ],
    otherState:''
  }

  addMaterialHandler = (event) => {
    this.setState({
      Material:[
        {name: 'Lamb', amount: '50', amountPrepared: '0'}
      ]
    })
  }

  render() {
    return ( 
      <div className="App">
        <header>Raw Material Inventory Tracking System</header>
        <header>Summary</header>
        <Material
          name={this.state.Material[0].name}
          amount={this.state.Material[0].amount}
          amountPrepared={this.state.Material[0].amountPrepared}
        />
        <button onClick={this.addMaterialHandler}>Add Material</button>
      </div>
    );
  }
}

export default App;
