import { ADD, REMOVE, EDIT } from '../constants/actionTypes';

const initialState = {
  data: []
};

const featureReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD:
      return {
        ...state,
        data: state.data.concat(action.payload)
      };
    case REMOVE:
      return {
        ...state,
        data: state.data.filter(element => element.feature !== action.payload)
      };
    case EDIT:
      return {
        ...state,
        data: state.data[action.payload].settings.concat(...action.payload.settings)
      };
    default:
      return state;
  }
}

export default featureReducer;