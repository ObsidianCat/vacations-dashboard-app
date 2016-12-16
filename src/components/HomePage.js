/**
 * Created by Lula on 10/18/2016.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as activitiesActions from '../actions/activitiesActions';
import ActivitiesList from './ActivitiesList';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  componentDidMount(){
    console.log("Homepage", "componentDidMount",this.props.actions.loadRecentActivities);
    this.props.actions.loadRecentActivities();
  }
  render() {
    return (
      <div className="homePage">
        <h2>Recent actions</h2>
        <ActivitiesList activitiesData={this.props.activities}></ActivitiesList>
      </div>
    );
  }
}

HomePage.propTypes = {
  activities: PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps){
  return {
    activities: state.activities
  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(activitiesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
