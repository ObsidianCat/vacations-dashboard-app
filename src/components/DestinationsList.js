import React, {PropTypes} from 'react';

const DestinationsList = ({destinations})=>{
  const menuItems = destinations.map((dest, index) => {
      return <a key={index} href="#">{dest.placeName}</a>;
  });

  console.log('received data', destinations);
  console.log('manipulated destinations', menuItems);

  return (
    <div className="mdl-layout__drawer">
      <span className="mdl-layout-title">Destinations</span>
      <nav className="mdl-navigation">
        {menuItems}
      </nav>
    </div>
  );
};

DestinationsList.propTypes = {
  destinations: PropTypes.array.isRequired
};

export default DestinationsList;
