import React,{ Component } from 'react';

import SumStore from '../stores/SumStore.js';

class Sum extends Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      count : SumStore.getSum()
    }
  }

  componentDidMount(){
    SumStore.addChangeListener(this.onChange);
  }

  componentWillUnmount(){
    SumStore.removeChangeListener(this.onChange);
  }

  onChange(){
    const newSum = SumStore.getSum();
    this.setState({
      count : newSum
    })
  }

  render(){
    return (
      <div>Total Count: {this.state.count}</div>
    )
  }
}

export default Sum;