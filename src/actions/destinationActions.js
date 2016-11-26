import fetch from 'isomorphic-fetch';
import * as types from './actionTypes';

export function loadDestsSuccess(destinations) {
  return {type: types.LOAD_ALL_DESTS_SUCCESS, destinations};
}
export function updateDestsSuccess(response) {
  return {type: types.UPDATE_DEST_SUCCESS, response};
}
export function createDestsSuccess(response) {
  return {type: types.CREATE_DEST_SUCCESS, response};
}


export function loadAllDestinations() {
  return dispatch =>{
    return fetch(`http://localhost:3333/api/destinations`)
      .then(function(response) {
        return response.json()
      })
      .then((response) => {
        dispatch(loadDestsSuccess(response));
      })
      .catch(error =>{
        throw(error)
    })
  }
}

export function updateDestination(destination) {
  console.log(destination);
  return (dispatch, getState) =>{
    return fetch(`http://localhost:3333/api/destinations/${destination._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(destination)
    })
      .then(function(response) {
        return response.json();
      })
      .then((response)=>{
        console.log(response);
        dispatch(updateDestsSuccess(response));

      })
      .catch((error)=>{
      throw(error);
    });
  };
}

export function createDestination(destination) {
  console.log(destination);
  return (dispatch, getState) =>{
    return fetch(`http://localhost:3333/api/destinations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(destination)
    })
      .then(function(response) {
        return response.json();
      })
      .then((response)=>{
        console.log(response);
        dispatch(createDestsSuccess(response));

      })
      .catch((error)=>{
        throw(error);
      });
  };
}

export function deleteDestination(destination) {
  console.log(destination);
  return (dispatch, getState) =>{
    return fetch(`http://localhost:3333/api/destinations/${destination._id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(destination)
    })
      .then(function(response) {
        loadAllDestinations();
      })
      .catch((error)=>{
        throw(error);
      });
  };
}

