import { createStore,combineReducers } from 'redux';
import {reducer as TodoReducer} from './todos';

const reducer = combineReducers({
  todos : TodoReducer
});

const store = createStore(reducer,{});
export default store;