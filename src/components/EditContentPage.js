/**
 * Created by Lula on 10/27/2016.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as destinationActions from '../actions/destinationActions';
import DestinationsList from './DestinationsList';
import EditDestination from './EditDestination';
import DestinationForm from './DestinationForm';

import { browserHistory } from 'react-router';

class EditContentPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      selectedDestination: {}
    };

    this.onSelectDestination = this.onSelectDestination.bind(this);

  }

  onSelectDestination(dest)
  {
    console.log('onSelectDestination', dest);
    this.setState({selectedDestination:dest});
    console.log(this.state.selectedDestination);
  };

  onFormSubmit(event, data){
    event.preventDefault();
    console.log(data);
  }
  render()
  {
    let editHint = (()=>{
      if(!this.state.selectedDestination.placeName){
      return (
        <p>Selet destination from the left sidebar</p>
      )
      }
      else{
        return null;
      }
    })();

    return (
      <div className="row mdl-layout--fixed-drawer">
        <DestinationsList
          destinations={this.props.destinations}
          selectDestination={this.onSelectDestination}/>
        <div className="col-xs-9">
          <h1>Edit destination</h1>
          {editHint}
          <DestinationForm onFormSubmit={this.onFormSubmit} selectedDestination={this.state.selectedDestination}/>
        </div>
      </div>
    )
  }

}

EditContentPage.propTypes = {
  destinations: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired

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
