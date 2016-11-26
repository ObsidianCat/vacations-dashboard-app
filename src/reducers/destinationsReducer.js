import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function destinationReducer(state = initialState.destinations, action){
  switch (action.type){
    case types.LOAD_ALL_DESTS_SUCCESS:
      return action.destinations;
    case types.UPDATE_DEST_SUCCESS:
    case types.CREATE_DEST_SUCCESS:
      return [
        ...state.filter(dest => dest._id != action.response._id),
        Object.assign({}, action.response)
      ];
    default:
      return state;
  }
}
