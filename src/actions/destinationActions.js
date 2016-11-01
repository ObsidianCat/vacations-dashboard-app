import fetch from 'isomorphic-fetch';
import * as types from './actionTypes';

export function loadDestsSuccess(destinations) {
  console.log(destinations);
  return {type: types.LOAD_ALL_DESTS_SUCCESS, destinations};
}


export function loadAllDestinations() {
  return dispatch =>{
    return fetch(`https://art-and-history.herokuapp.com/api/destinations`)
      .then(response => response.json())
      .then(json => dispatch(loadDestsSuccess(json)))
      .catch(error =>{
        throw(error)
    })
  }
}
