import React, {PropTypes} from 'react';

import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

import * as DESTINATION_DATA from '../constants/destination';
import _ from 'lodash';

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

    const field = event.target.name;
    let destination = this.state.destination;
    destination[field] = event.target.value;
    return this.setState({destination});

  };


  componentWillReceiveProps(nextProps) {
    if(this.props.selectedDestination._id != nextProps.selectedDestination._id){
      this.setState({
        destination:Object.assign({}, nextProps.selectedDestination)
      });
    }
  }



  createTagsList = (destinationTags, allTags)=>{
    const onChangeCallback = this.handleChange;
    const tags = allTags.map(function(tag, onChangeCallback) {
      let isChecked = _.find(destinationTags, function(o) { return o.name === tag.name; });
      isChecked = isChecked !=undefined;
      console.log(this);

      return (
        <Checkbox
          key={tag.name}
          label={tag.name}
          defaultChecked={isChecked}
          name={tag.name}
          onChange={onChangeCallback}
        />
      );

    });
    return tags;
  };

  render(){
    if(!this.state.destination.placeName){
      return null;
    } else{

      const artTagsList = this.createTagsList(this.state.destination.artTags, DESTINATION_DATA.ART_TAGS);
      const historyTagsList = this.createTagsList(this.state.destination.historyTags, DESTINATION_DATA.HISTORY_TAGS);

      return (
        <form action="#">
          <fieldset className="destination-detailes">
            <TextField
              hintText="Destination Name"
              floatingLabelText="Destination Name"
              id="destination-name-field"
              value={this.state.destination.placeName||''}
              onChange={this.handleChange}
              name="placeName"
            /><br/>
            <TextField
              hintText="Country Name"
              floatingLabelText="Country Name"
              id="destination-name-field"
              value={this.state.destination.countryName||''}
              onChange={this.handleChange}
              name="countryName"/><br/>
          </fieldset>
          <fieldset className="art-tags">
            <legend>Art Tags</legend>
            {artTagsList}
          </fieldset>
          <fieldset className="history-tags">
            <legend>History Tags</legend>
            {historyTagsList}

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
