/**
 * Created by Lula on 10/18/2016.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
moment().format();

export const HomePage = (props) => {
  const activities = props.activities.map((activity, index) => {
    let activityDate = moment(activity.date).format("dddd, MMMM Do YYYY, h:mm:ss a");
    return <li className="recentActivitiesList--item mdl-list__item" key={index}>
      <span className="recentActivitiesList--date">{activityDate}</span>
      <span className="recentActivitiesList--name">{activity.message}</span>
    </li>;
  });

  return (
    <div className="homePage">
      <h2>Recent actions</h2>
      <ul className="recentActivitiesList">
        {activities}
      </ul>
    </div>
  );
};

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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
