import { createStore,combineReducers } from 'redux';
import {reducer as TodoReducer} from './todos';
import {reducer as FilterReducer} from './filters';

const reducer = combineReducers({
  todos : TodoReducer,
  filter : FilterReducer
});

const store = createStore(reducer,{});
export default store;