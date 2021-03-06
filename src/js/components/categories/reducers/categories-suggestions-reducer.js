import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const categoryReducer = (state=initialState.categories_suggestions, action) => {
  let data
  switch(action.type) {
    case actionTypes.CATEGORY_SUGGESTIONS_INDEX_START:
      return { ...state, loading: true }

    case actionTypes.CATEGORY_SUGGESTIONS_INDEX_COMPLETE:
      return {...state, ...action.payload, loading: false}

    case actionTypes.CATEGORY_SUGGESTIONS_INDEX_FAIL:
      return {...state, loading: false, error: action.payload}

    case actionTypes.CATEGORY_FOLLOW_CREATE_COMPLETE:
      data = state.data.filter(category => category.id != action.payload.id)
      return {...state, data}

    case actionTypes.EVENT_SUGGESTIONS_INDEX_COMPLETE:
      // data = [...state.data, ...action.payload.data]
      return {...state, ...action.payload}

    case actionTypes.EVENT_ATTEND_CREATE_COMPLETE:

    case actionTypes.EVENT_SUGGESTIONS_INDEX_FAIL:
      return {...state, loading: false, error: action.payload }

    default:
      return state;
  }
};

export default categoryReducer