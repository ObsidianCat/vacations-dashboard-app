import React, {PropTypes} from 'react';

const EditDestination = ({selectedDestination })=>{

  return (
    <div className="col-xs-9">
      <p>{selectedDestination.placeName}</p>
    </div>
  );
};

EditDestination.propTypes = {
  selectedDestination: PropTypes.object.isRequired,
};

export default EditDestination;
