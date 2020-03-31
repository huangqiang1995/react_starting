import React,{Component} from 'react';
import { connect } from 'react-redux'; 
import {addTodo} from '../actions.js';
class AddTodo extends Component {
  constructor(props,connect){
    super(props,connect);
    this.onSubmit = this.onSubmit.bind(this);
    this.refInput = this.refInput.bind(this); 
  }
  onSubmit(ev){
    ev.preventDefault();
    const value = this.input.value;
    if(!value.trim()){
      return;
    }else{
      this.props.onAdd(value);
       this.input.value = "";
    }
  }
  refInput(node){
    this.input = node;
  }
  render(){
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input ref={this.refInput} />
          <button type="submit">添加</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd : (text)=>{
      dispatch(addTodo(text));
    }
  }
}

export default connect(null,mapDispatchToProps)(AddTodo);