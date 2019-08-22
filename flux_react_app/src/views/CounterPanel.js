import React,{ Component } from 'react';

import Counter from './Counter.js';

import Sum from './Sum.js';

class CounterPanel extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Counter caption="First" />
        <Counter caption="Second" />
        <Counter caption="Third" />
        <hr />
        <Sum />
      </div>
    )
  }
}

export default CounterPanel;