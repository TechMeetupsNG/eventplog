import initialState from './intialState';
import actionTypes from '../actions/types'

const communityReducer = (state=initialState.community, action) => {
  switch(action.type) {
    case actionTypes.COMMUNITY_SHOW_START:
    case actionTypes.COMMUNITY_UPDATE_START:
      return {loading: true};

    case actionTypes.COMMUNITY_SHOW_COMPLETE:
    case actionTypes.COMMUNITY_UPDATE_COMPLETE:
    case actionTypes.COMMUNITY_FOLLOW_CREATE_COMPLETE:
    case actionTypes.COMMUNITY_FOLLOW_DELETE_COMPLETE:
      return action.payload

    case actionTypes.COMMUNITY_SHOW_FAIL:
    case actionTypes.COMMUNITY_UPDATE_FAIL:
      return {loading: false, error: action.payload}

    default:
      return state;
  }
};

export default communityReducer