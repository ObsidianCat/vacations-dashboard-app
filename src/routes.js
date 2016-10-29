import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import EditPage from './components/EditContentPage';
import CreatePage from './components/CreateContentPage';
import HomePage from './components/HomePage';



export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="edit" component={EditPage}/>
    <Route path="create" component={CreatePage}/>
    <Route path="*" component={HomePage}/>
  </Route>
);
