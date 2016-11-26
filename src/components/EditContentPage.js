/**
 * Created by Lula on 10/27/2016.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as destinationActions from '../actions/destinationActions';
import DestinationsList from './DestinationsList';
import DestinationForm from './DestinationForm';

import { browserHistory } from 'react-router';

class EditContentPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      selectedDestination:this.props.selectedDestination,
    };

    this.onSelectDestination = this.onSelectDestination.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onSelectDestination(dest)
  {
    console.log('onSelectDestination', dest);
    this.setState({selectedDestination:dest});
    console.log(this.state.selectedDestination);
  };

  onFormSubmit(event, data, action){
    event.preventDefault();
    if(action==='delete'){
      this.props.actions.deleteDestination(data);
    }
    else{
      if(data._id){
        this.props.actions.updateDestination(data);
      }
      else{
        this.props.actions.createDestination(data);
      }
    }
  }

  render() {
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
      <div className="edit-destination row">
        <DestinationsList
          destinations={this.props.destinations}
          selectDestination={this.onSelectDestination}/>
        <div className="col-xs-9">
          <h2>Edit destination</h2>
          {editHint}
          <DestinationForm onFormSubmit={this.onFormSubmit} selectedDestination={this.state.selectedDestination}/>
        </div>
      </div>
    )
  }

}

EditContentPage.propTypes = {
  destinations: PropTypes.array.isRequired,
  selectedDestination: PropTypes.object.isRequired,
  actions:PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps){
  let selectedDestination = {
    placeName:'',
    countryName:'',
  };
  return {
    selectedDestination: selectedDestination,
    destinations: state.destinations
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(destinationActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditContentPage);
