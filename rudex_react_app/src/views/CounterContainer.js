import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
import * as Actions from '../Actions.js';
import Counter from './Counter.js'

class CounterContainer extends Component {
  constructor( props,context ){
    super(props,context);
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getOwnState = this.getOwnState.bind(this);
    this.state = this.getOwnState();
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.caption !== this.props.caption) ||
      (nextState.value !== this.state.value);
  }
  componentDidMount(){
    this.context.store.subscribe(this.onChange);
  }
  componentWillUnmount(){
    this.context.store.unsubscibe(this.onChange);
  }
  onChange(){ 
    this.setState(this.getOwnState());
  }
  onIncrement(){
    this.context.store.dispatch(Actions.increment(this.props.caption));
  }
  onDecrement(){
    this.context.store.dispatch(Actions.decrement(this.props.caption));
  }
  getOwnState(){ 
    return {
      value : this.context.store.getState()[this.props.caption]
    };
  }
  render(){
    const value = this.state.value;
    const {caption} = this.props;
    return (
      <div>
        <Counter 
          caption={caption} 
          value={value}
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
        ></Counter>
      </div>
    )  
  }
}
CounterContainer.propTypes = {
  caption: PropTypes.string.isRequired
};
CounterContainer.contextTypes = {
  store : PropTypes.object
}
export default CounterContainer;