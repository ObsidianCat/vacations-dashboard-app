import fetch from 'isomorphic-fetch';
import * as types from './actionTypes';

export function loadDestsSuccess(destinations) {
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

export function updateDestination() {
  return dispatch =>{
    // return fetch(`https://art-and-history.herokuapp.com/api/destinations`)
    //   .then(response => response.json())
    //   .then(json => dispatch(loadDestsSuccess(json)))
    //   .catch(error =>{
    //     throw(error)
    //   })
    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Hubot',
        login: 'hubot',
      })
    })

  }
}
