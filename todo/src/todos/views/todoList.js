import React,{Component} from 'react';

import { connect } from 'react-redux';

class TodoList extends Component {
  constructor(props,connect){
    super(props,connect);
  } 
  render(){
    const todos = this.props.todos;
    console.log(todos)
    return (
      <div>
        {
          todos.map(item=>{
          return <span key={item.id}>{item.text}</span>
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state)=>{ 
  return {todos:state.todos};
}

export default connect(mapStateToProps,null)(TodoList);