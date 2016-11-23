'use strict';

import React, {PropTypes} from 'react';

import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

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

  handleChange = (event, elementState) => {
    let destination = _.cloneDeep(this.state.destination);

    switch(event.target.dataset.type) {
      case 'artTags':
      case 'historyTags':
        const dataConstName = event.target.dataset.type === 'artTags'?'ART_TAGS':'HISTORY_TAGS';
        const curTagType = event.target.dataset.type;
        const curTagName = event.target.name;
        let listOfTagsInDest = destination[curTagType];

        let tagInDestination = _.find(listOfTagsInDest, function(o) { return o.name === curTagName; });

        if(!tagInDestination && elementState){
          let newTag = _.find(DESTINATION_DATA[dataConstName], function(o) { return o.name === curTagName; });
          listOfTagsInDest.push(newTag);
        }
        else if(tagInDestination && !elementState){
          _.remove(listOfTagsInDest, (o)=>{ return o.name === curTagName;});
        }

        break;
      case 'basicInfo':
      default:
        const field = event.target.name;
        destination[field] = event.target.value;
    }

    return this.setState({destination});

  };

  componentWillReceiveProps(nextProps) {
    if(this.props.selectedDestination._id != nextProps.selectedDestination._id){
      this.setState({
        destination:Object.assign({}, nextProps.selectedDestination)
      });
    }
  }

  createTagsList = (destinationTags, allTags, tagType)=>{
    const onChangeCallback = this.handleChange;
    const tags = allTags.map(function(tag) {
      let isChecked = _.find(destinationTags, function(o) { return o.name === tag.name; });
      isChecked = isChecked !=undefined;

      return (
        <Checkbox
          key={tag.name}
          label={tag.name}
          defaultChecked={isChecked}
          name={tag.name}
          onCheck={onChangeCallback}
          data-type={tagType}
        />
      );

    });
    return tags;
  };

  onSubmit = (event)=>{
    this.props.onFormSubmit(event, this.state.destination);
  };

  render(){
    if(!this.state.destination.placeName){
      return null;
    } else{

      const artTagsList = this.createTagsList(this.state.destination.artTags, DESTINATION_DATA.ART_TAGS, 'artTags');
      const historyTagsList = this.createTagsList(this.state.destination.historyTags, DESTINATION_DATA.HISTORY_TAGS, 'historyTags');

      return (
        <form action="#">
          <fieldset className="destination-detailes">
            <TextField
              hintText="Destination Name"
              floatingLabelText="Destination Name"
              id="destination-name-field"
              value={this.state.destination.placeName}
              onChange={this.handleChange}
              name="placeName"
              data-type="basicInfo"
            /><br/>
            <TextField
              hintText="Country Name"
              floatingLabelText="Country Name"
              id="destination-name-field"
              value={this.state.destination.countryName}
              onChange={this.handleChange}
              name="countryName"
              data-type="basicInfo"
            /><br/>
          </fieldset>
          <fieldset className="art-tags">
            <legend>Art Tags</legend>
            {artTagsList}
          </fieldset>
          <fieldset className="history-tags">
            <legend>History Tags</legend>
            {historyTagsList}
          </fieldset>

          <fieldset>
            <input
              type="submit"
              value={'Save'}
              className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
              onClick={this.onSubmit}/>
          </fieldset>
        </form>
      )
    }

  }
}

DestinationForm.propTypes = {
  selectedDestination: PropTypes.object,
  // onFormSubmit:PropTypes.function,
};
// DestinationForm.defaultProps = {
//   selectedDestination: {placeName:'Palma di Maiorca'}
// };

export default DestinationForm;
