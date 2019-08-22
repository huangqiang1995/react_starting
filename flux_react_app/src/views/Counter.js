import React,{ Component } from 'react';

import CounterStore from '../stores/CounterStore.js';

import * as Actions from '../Actions.js'

class Counter extends Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onClickInc = this.onClickInc.bind(this);
    this.onClickDec = this.onClickDec.bind(this);
    this.state = {
      count : CounterStore.getCounterValues()[props.caption]
    }
  }

  componentDidMount(){
    CounterStore.addChangeListener(this.onChange);
  }

  componentWillUnmount(){
    CounterStore.removeChangeListener(this.onChange);
  }

  onChange(){
    const newCount = CounterStore.getCounterValues()[this.props.caption];
    this.setState({
      count:newCount
    })
  }

  onClickInc(){
    Actions.increment(this.props.caption);
  }

  onClickDec(){
    Actions.decrment(this.props.caption);
  }

  render(){
    const caption = this.props.caption;
    return (
      <div>
        <span>{caption}</span>
        <button onClick={this.onClickInc}>+</button>
        {this.state.count}
        <button onClick={this.onClickDec}>-</button>
      </div>
    )
  }
}

export default Counter;