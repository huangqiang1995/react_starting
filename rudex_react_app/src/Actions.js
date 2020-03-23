import * as ActionTypes from './ActionTypes.js';

export const increment = (counterCaption) => {
  console.log(counterCaption)
  return {
    type: ActionTypes.INCREMENT,
    counterCaption: counterCaption
  };
};

export const decrement = (counterCaption) => {
  return {
    type: ActionTypes.DECREMENT,
    counterCaption: counterCaption
  };
};
