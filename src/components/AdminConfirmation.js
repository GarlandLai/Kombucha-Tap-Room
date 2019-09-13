import React from 'react';
import PropTypes from 'prop-types';

function AdminConfirmation(props){
  return (
    <div>
      <p>Are you an Admin?</p>
      <button onClick={props.onAdminConfirmation}>Yes</button>
    </div>
  );
}

AdminConfirmation.propTypes = {
  onAdminConfirmation: PropTypes.func
}

export default AdminConfirmation;
