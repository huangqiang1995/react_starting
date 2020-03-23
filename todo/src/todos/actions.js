import  * as ActionTypes  from './actionTypes';

let nextTodoId = 0;
export const addTodo = (text) => ({
  type : ActionTypes.ADDTODO,
  completed:false,
  id:nextTodoId++,
  text:text
})

export const toggleTodo = (id) =>({
  type : ActionTypes.TOGGLETODO,
  id:id
})

export const removeTodo = (id) => ({
  type : ActionTypes.REMOVETODO,
  id:id
})