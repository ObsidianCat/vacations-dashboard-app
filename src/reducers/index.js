/**
 * Created by Lula on 10/29/2016.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer
});

export default rootReducer;
