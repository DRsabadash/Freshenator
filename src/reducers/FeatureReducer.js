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
    const updatedData = {...state};
      updatedData.data.map(element => {
        if (element.feature === action.payload.feature) {
          if (element.settings.hasOwnProperty([action.payload.setting])) {
            element.settings[action.payload.setting].value = action.payload.value
          } else {
          element.settings = {...element.settings, [action.payload.setting]: { value: action.payload.value } }
          }
        }
      })
      return {...state}
    default:
      return state;
  }
}

export default featureReducer;