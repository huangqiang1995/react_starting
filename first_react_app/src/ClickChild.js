import React,{ Component } from 'react';
 
class ClickChild extends Component {
  
  constructor(props){
    super(props);
    this.onClickIncBtn = this.onClickIncBtn.bind(this);
    this.onClickDecBtn = this.onClickDecBtn.bind(this);
    this.state = {
      count : props.initValue || 0
    } 
  }
  onClickIncBtn(){
    this.setState({count: this.state.count + 1});
  }
  onClickDecBtn(){
    this.setState({count: this.state.count - 1});
  }
  render(){
    const {caption} = this.props;
    return(
      <div>
        <button onClick={this.onClickIncBtn}>+</button>
        <button onClick={this.onClickDecBtn}>-</button>
        <span>{caption} count: {this.state.count}</span>
      </div>
    );
  }
}

export default ClickChild;