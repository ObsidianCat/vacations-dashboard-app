import React, {PropTypes} from 'react';

import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

import * as DESTINATION_DATA from '../constants/destination';

// import ART_TAGS from '../constants/destination';
class DestinationForm extends React.Component{

  constructor(props, context) {
    super(props, context);

    this.state = {
      destination: this.props.selectedDestination,
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };


  componentWillReceiveProps(nextProps) {
  console.log('componentWillReceiveProps', nextProps);
    // if(this.props.selectedDestination.placeName !=''){
      this.setState({
        destination: nextProps.selectedDestination,
      });
    // };
  }

  artTagsList = DESTINATION_DATA.ART_TAGS.map(function(tag) {
    return (
      <Checkbox
        key={tag.name}
        label={tag.name}
      />
    );
  });


  historyTagsList = DESTINATION_DATA.HISTORY_TAGS.map(function(tag) {
    return (
      <Checkbox
        key={tag.name}
        label={tag.name}
      />
    );
  });


  render(){
    if(!this.state.destination.placeName){
      return null;
    } else{
      return (
        <form action="#">
          <fieldset className="destination-detailes">
            <TextField
              hintText="Destination Name"
              floatingLabelText="Destination Name"
              id="destination-name-field"
              value={this.state.destination.placeName||''}
              onChange={this.handleChange}
            /><br/>
            <TextField
              hintText="Country Name"
              floatingLabelText="Country Name"
              id="destination-name-field"
              value={this.state.destination.countryName||''}
              onChange={this.handleChange}/><br/>
          </fieldset>
          <fieldset className="art-tags">
            <legend>Art Tags</legend>
            {this.artTagsList}
          </fieldset>
          <fieldset className="history-tags">
            <legend>History Tags</legend>
            {this.historyTagsList}

          </fieldset>

        </form>
      )
    }

  }
}

// DestinationForm.propTypes = {
//   selectedDestination: PropTypes.object
// };
// DestinationForm.defaultProps = {
//   selectedDestination: {placeName:'Palma di Maiorca'}
// };

export default DestinationForm;
