import * as ActionTypes from "./actionTypes.js";

export default (state = [],action) => {
  switch(action.type){
    case ActionTypes.ADDTODO :{
      return [
        {
          id : action.id,
          text : action.text,
          completed:action.completed
        },
        ...state
      ]
    }
    case ActionTypes.TOGGLETODO:{
      return state.map(item=>{
        if(action.id === item.id){
          return {...item,completed:!item.completed}
        }else{
          return item
        }
      })
    }
    case ActionTypes.REMOVETODO:{
      return state.filter(item=>{
        return item.id !== action.id
      })
    }
    default: {
      return state
    }
  }
}