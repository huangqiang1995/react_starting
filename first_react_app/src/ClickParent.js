import React,{ Component } from 'react';

import ClickChild from './ClickChild.js';

class ClickParent extends Component {
  
  constructor(props){

    super(props);

    this.onCounterUpdate = this.onCounterUpdate.bind(this);

    this.initValues = [0,10,20];

    const sum = this.initValues.reduce((a,b)=>a+b,0);
    this.state = {
      sum
    }
  }

  onCounterUpdate(newValue,previousValue){
    const valueChange = newValue - previousValue;
    this.setState({
      sum:this.state.sum+valueChange
    })
  } 

  render(){
    console.log("enter ClickParent render")
    return(
      <div>
        <ClickChild caption="First" onUpdate={this.onCounterUpdate} initValue={this.initValues[0]} />
        <ClickChild caption="Second" onUpdate={this.onCounterUpdate} initValue={this.initValues[1]} />
        <ClickChild caption="Third" onUpdate={this.onCounterUpdate} initValue={this.initValues[2]} />
        <button onClick={ () => this.forceUpdate() }>
          Click me to repaint!
        </button>
        <hr />
        <div>Total Count :{this.state.sum}</div>
      </div>
    )
  }
}

export default ClickParent;