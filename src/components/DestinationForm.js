import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';

class DestinationForm extends React.Component{

  constructor(props, context) {
    super(props, context);

  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };


  componentDidMount() {
    console.log(this.props.selectedDestination)
  }

  render(){
    return (

    <form action="#">
      <fieldset class="destination-detailes">
          <TextField
            hintText="Destination Name"
            floatingLabelText="Destination Name"
            id="destination-name-field"
            value={this.props.selectedDestination.placeName}
            onChange={this.handleChange}
          /><br/>
        <TextField
          hintText="Country Name"
          floatingLabelText="Country Name"
          id="destination-name-field"
          value={this.props.selectedDestination.countryName}
          onChange={this.handleChange}/><br/>
      </fieldset>
      <fieldset class="art-tags">

      </fieldset>
      <fieldset class="history-tags">

      </fieldset>

    </form>
    )
  }
}

DestinationForm.propTypes = {
  selectedDestination: PropTypes.object
};
DestinationForm.defaultProps = {
  selectedDestination: {placeName:'Palma di Maiorca'}
};

export default DestinationForm;
