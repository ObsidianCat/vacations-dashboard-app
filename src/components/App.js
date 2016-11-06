/**
 * Created by Lula on 10/27/2016.
 */
import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = (props) =>{
  return (
    <div className="wrap container-fluid mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header className="row mdl-layout__header">
        <div className="mdl-layout__header-row">
          <IndexLink to="/"><span className="mdl-layout-title">Time travel vacations dashboard </span></IndexLink>
          <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation mdl-layout--large-screen-only">
            <p className="mdl-navigation__link">
              <Link to="/edit">Edit content</Link>
            </p>
            <p className="mdl-navigation__link" >
              <Link to="/create">Create content</Link>
            </p>
          </nav>
        </div>
      </header>
      <main className="page-section mdl-layout__content">
        {props.children}
      </main>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default  App;
