import fetch from 'isomorphic-fetch';
import * as types from './actionTypes';


export function loadRecentActivitiesSuccess(activities) {
  console.log("loadRecentActivitiesSuccess", activities)
  return {type: types.LOAD_RECENT_ACTIVITIES_SUCCESS, activities};
}

export function loadRecentActivities() {
  return dispatch =>{
    console.log("loadRecentActivities")
    return fetch(`http://localhost:3333/api/activities`)
      .then(function(response) {
        return response.json();
      })
      .then((response) => {
        dispatch(loadRecentActivitiesSuccess(response));
      })
      .catch(error =>{
        throw(error);
      });
  };
}

