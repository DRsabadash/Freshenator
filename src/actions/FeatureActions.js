import * as ActionTypes from '../constants/actionTypes';

export const add = (reducer, data) => {
  return {
    name: reducer,
    type: ActionTypes.ADD,
    payload: data,
  }
}

export const remove = (reducer, data) => {
  return {
    name: reducer,
    type: ActionTypes.REMOVE,
    payload: data,

  }
}

export const edit = (reducer, data) => {
  return {
    name: reducer,
    type: ActionTypes.EDIT,
    payload: data,

  }
}
