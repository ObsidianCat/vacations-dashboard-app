/**
 * Created by Lula on 12/16/2016.
 */
import React, {PropTypes} from 'react';
import moment from 'moment';
moment().format();

const ActivitiesList = ({activitiesData}) => {

  const activities = activitiesData.map((activity, index) => {
    let activityDate = moment(activity.date).format("dddd, MMMM Do YYYY, h:mm:ss a");
    return <li className="recentActivitiesList--item mdl-list__item" key={index}>
      <span className="recentActivitiesList--date">{activityDate}</span>
      <span className="recentActivitiesList--name">{activity.message}</span>
    </li>;
  });

  console.log(activitiesData);
  return (
      <ul className="recentActivitiesList">
        {activities}
      </ul>
  );
};

ActivitiesList.propTypes = {
  activitiesData: PropTypes.array.isRequired
};

export default ActivitiesList;
