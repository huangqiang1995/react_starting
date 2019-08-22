import {EventEmitter} from 'events';

import AppDispatcher from '../AppDispatcher.js';

import * as ActionTypes from '../ActionTypes.js';

import CounterStore from './CounterStore.js';

function computeSum(counterValues){
  let sum = 0;
  for( const key in counterValues ){
    sum += counterValues[key];
  }
  return sum;
}
const CHANGE_EVENT = 'changeco';

const SumStore = Object.assign({},EventEmitter.prototype,{
  getSum:function(){
    return computeSum(CounterStore.getCounterValues());
  },
  emitChange:function(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener:function(cb){
    this.on(CHANGE_EVENT,cb)
  },
  removeChangeListener:function(cb){
    this.removeChangeListener(CHANGE_EVENT,cb)
  }
})

SumStore.dispatchToken = AppDispatcher.register((action)=>{
  if(action.type === ActionTypes.INCREMENT || action.type === ActionTypes.DECREMENT){
    AppDispatcher.waitFor([CounterStore.dispatchToken]);
    SumStore.emitChange();
  }
})

export default SumStore;