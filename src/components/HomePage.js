/**
 * Created by Lula on 10/18/2016.
 */
import React, {PropTypes} from 'react';

import {connect} from 'react-redux';

// class HomePage extends React.Component{
//   render(){
//     return (
//       <div>
//         <h2>Recent actions</h2>
//       </div>
//     )
//   }
// }

export const HomePage = (props) => {
  console.log('activities', props.activities);
  return (
    <div>
      <h2>Recent actions</h2>
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
