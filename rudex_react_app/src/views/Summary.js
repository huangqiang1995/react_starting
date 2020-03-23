import React, { Component } from 'react';
import store from '../Store.js';

class Summary extends Component{
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this); 
    this.state = this.getOwnState(); 
  }
  onChange() {
    this.setState(this.getOwnState());
  }

  componentDidMount(){
    store.subscribe(this.onChange);
  }
  componentWillUnmount(){
    store.unsubscribe(this.onChange);
  }
  
  getOwnState(){
    const state = store.getState(); 
    let num = 0;
    for( const key in state ){
      if(state.hasOwnProperty(key)){
        num += state[key]
      }
    }  
    return { num: num };
  }
  render(){
    const num = this.state.num;
    return(
      <div>
        Total Count: {num}
      </div>
    )
  }
}

export default Summary;