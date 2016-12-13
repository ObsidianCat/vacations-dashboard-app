import React, {PropTypes} from 'react';

const DestinationsList = ({destinations, selectDestination })=>{
  const menuItems = destinations.map((dest, index) => {
      return <li className="mdl-list__item" key={index}>
        <a className="mdl-list__item-primary-content"  href="#" onClick={()=>{selectDestination(dest)}}>{dest.placeName}</a>
      </li>;
  });

  return (
    <div className="edit-destination__sidebar col-xs-3">
      <p className="mdl-button mdl-button--accent mdl-button--raised mdl-js-button" onClick={()=>{selectDestination({
        placeName:'',
        countryName:'',
        artTags:[],
        historyTags:[],
        newItem:true,
      }
      )}}>
        Create new destination
      </p>
      <p className="mdl-layout-title">Destinations</p>
      <nav className="mdl-list">
        {menuItems}
      </nav>
    </div>
  );
};

DestinationsList.propTypes = {
  destinations: PropTypes.array.isRequired,
  selectDestination: PropTypes.func.isRequired,
};

export default DestinationsList;
