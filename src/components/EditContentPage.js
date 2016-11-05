/**
 * Created by Lula on 10/27/2016.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as destinationActions from '../actions/destinationActions';
import DestinationsList from './DestinationsList';
import { browserHistory } from 'react-router';

class EditContentPage extends React.Component{
  constructor(props, context){
    super(props, context);
  }

  render(){
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
        <DestinationsList destinations={this.props.destinations}/>
        <div>
          <h1>Edit Content Page</h1>
        </div>
      </div>
    )
  }
}

EditContentPage.propTypes = {
  destinations: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    destinations: state.destinations
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(destinationActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditContentPage);
