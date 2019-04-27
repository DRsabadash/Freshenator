import { combineReducers } from 'redux';
import featureReducer from './FeatureReducer';
import * as reducerTypes from '../constants/reducerTypes';

const createReducer = (reducer, name) => (state, action) => {
  if (name !== action.name && state !== undefined) {
    return state;
  }
  return reducer(state, action);
}

const rootReducer = combineReducers({
  //Feature reducer
  [reducerTypes.STORE_FEATURES]: createReducer(featureReducer, reducerTypes.STORE_FEATURES),

});

export default rootReducer;
