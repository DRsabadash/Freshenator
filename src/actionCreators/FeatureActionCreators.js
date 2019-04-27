import { add, remove, edit } from '../actions/FeatureActions';
import * as reducerTypes from '../constants/reducerTypes';

/**
 * ADD feature action
 * 
 * @param {Function} dispatch
 * @param {Object} payload - object containing  'feature: name, settings: [{}]'
 * @returns true, or a promise rejection
 */
export const addFeature = (payload) => (dispatch) => {
  const { STORE_FEATURES } = reducerTypes;
  dispatch(add(STORE_FEATURES, payload))
}

/**
 * REMOVE feature action
 * 
 * @param {Function} dispatch
 * @param {Object} payload - string containing feature name
 * @returns true, or a promise rejection
 */
export const removeFeature = (payload) => (dispatch) => {
  const { STORE_FEATURES } = reducerTypes;
  dispatch(remove(STORE_FEATURES, payload))
}

/**
 * EDIT feature action
 * 
 * @param {Function} dispatch
 * @param {Object} payload - array of objects with {setting: 'Name', option: anyType}
 * @returns true, or a promise rejection
 */
export const editFeature = (payload) => (dispatch) => {
  const { STORE_FEATURES } = reducerTypes;
  dispatch(edit(STORE_FEATURES, payload))
}