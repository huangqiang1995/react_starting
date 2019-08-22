import {EventEmitter} from 'events';

import AppDispatcher from '../AppDispatcher.js';

import * as ActionTypes from '../ActionTypes.js';

const counterValues = {
  'First':0,
  'Second':10,
  'Third':30
}
const CHANGE_EVENT = 'changeco';

const CounterStore = Object.assign({},EventEmitter.prototype,{
  getCounterValues:function(){
    return counterValues;
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

CounterStore.dispatchToken = AppDispatcher.register((action)=>{
  if(action.type === ActionTypes.INCREMENT){
    counterValues[action.counterCaption]++;
    CounterStore.emitChange();
  }else if(action.type === ActionTypes.DECREMENT){
    counterValues[action.counterCaption]--;
    CounterStore.emitChange();
  }
})

export default CounterStore;