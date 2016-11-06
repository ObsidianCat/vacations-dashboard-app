import React, {PropTypes} from 'react';

const DestinationsList = ({destinations, selectDestination })=>{
  const menuItems = destinations.map((dest, index) => {
      return <li className="mdl-list__item" key={index}>
        <a className="mdl-list__item-primary-content"  href="#" onClick={()=>{selectDestination(dest)}}>{dest.placeName}</a>
      </li>;
  });

  return (
    <div className="col-xs-3">
      <span className="mdl-layout-title">Destinations</span>
      <nav className="mdl-list">
        {menuItems}
      </nav>
    </div>
  );
};

DestinationsList.propTypes = {
  destinations: PropTypes.array.isRequired,
  selectDestination: PropTypes.func.isRequired

};

export default DestinationsList;
