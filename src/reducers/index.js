/**
 * Created by Lula on 10/29/2016.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import destinations from './destinationsReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  destinations
});

export default rootReducer;
