    
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Subtotal from './components/Subtotal/Subtotal'
import PickupSavings from './components/PickupSavings/PickupSavings'
import TaxesFees from './components/TaxesFees/TaxesFees'
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal'

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      total: 100,
      PickupSavings: -3.85,
      taxes: 0,
      estimatedTotal: 0

    }
  }
  render() {
  return (
    <div className="container">
    <div className=" grid purchase-card">
    <Subtotal price={this.state.total.toFixed(2)}/>
    <PickupSavings price={this.state.PickupSavings}/>
    <TaxesFees taxes={this.state.taxes.toFixed(2)}/>
    <hr/>
    <EstimatedTotal price={this.state.estimatedTotal}/>
    </div>
    </div>
  );
  }
}

export default App;
