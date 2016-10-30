import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function destinationReducer(state = initialState.destinations, action){
  switch (action.type){
    case types.LOAD_ALL_DESTS_SUCCESS:
      return action.destinations
    default:
      return state;
  }
}
