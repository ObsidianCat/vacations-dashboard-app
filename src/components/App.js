/**
 * Created by Lula on 10/27/2016.
 */
import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const App = (props) =>{
  return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header className="mdl-layout__header">
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
      <main className="mdl-layout__content">
        <div className="page-content">
          {props.children}
        </div>
      </main>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default  App;
