/**
 * Created by Lula on 10/29/2016.
 */
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './vendors/material-design-lite/material.min.css';
// import './vendors/material-design-lite/material.min.js';
import './vendors/material-design-lite-theme/grey-amber.css';
import './styles/main.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
// import {loadAllDestinations} from './actions/destinationActions';
import {loadRecentActivities} from './actions/activitiesActions';

import { syncHistoryWithStore } from 'react-router-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = configureStore();
// store.dispatch(loadAllDestinations());
store.dispatch(loadRecentActivities());
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, document.getElementById('app')
);
