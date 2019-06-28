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
          element.settings = { [action.payload.setting]: { value: action.payload.value } }

          // element.settings.map(item => {
          //   if (item.setting === action.payload.setting) {
          //     item.value = action.payload.value
          //   }
          // })
          // if(!element.settings.some(item => item.setting === action.payload.setting)) {
          //   element.settings.push({setting: action.payload.setting, value: action.payload.value})
          // }

        }
      })
      return {...state}
    default:
      return state;
  }
}

export default featureReducer;