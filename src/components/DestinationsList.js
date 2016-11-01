import React, {PropTypes} from 'react';

const DestinationsList = ({destination})=>{
  return (
    <div classNameName="mdl-layout__drawer">
      <span className="mdl-layout-title">Destinations</span>
      <nav className="mdl-navigation">
        {/*{destination.map((dest) => {*/}
           {/*return <a href="#">dest</a>*/}
          {/*}*/}
        {/*)}*/}
      </nav>
    </div>
  );
};

DestinationsList.propTypes = {
  destination: PropTypes.object.isRequired
};

export default DestinationsList;
