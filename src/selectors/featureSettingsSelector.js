import { createSelector } from 'reselect';

const getFeatureSettings = (state, feature) => state.data.find(element => element.feature === feature).settings

const makeGetFeatureSettings = () => {
  return createSelector (
    [ getFeatureSettings ],
    (state) => {
      return state
    }
  )
}

export default makeGetFeatureSettings;