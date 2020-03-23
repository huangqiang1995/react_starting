import React,{ Component } from 'react';

import CounterContainer from './CounterContainer.js';

import Summary from './Summary.js';

class CounterPanel extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <CounterContainer caption="First" />
        <CounterContainer caption="Second" />
        <CounterContainer caption="Third" />
        <hr />
        <Summary />
      </div>
    )
  }
}

export default CounterPanel;