import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';
import EditKegForm from './EditKegForm';

function Admin(props) {
  let optionalSelectedKegContent = null;
  if (props.selectedKeg != null) {
    optionalSelectedKegContent =  <EditKegForm selectedKeg={props.selectedKeg} />;
  };

  return (
    <div>
    <h1>Admin</h1>
    {optionalSelectedKegContent}
    <KegList
      kegList={props.kegList}
      currentRouterPath={props.currentRouterPath}
      onKegSelection={props.onKegSelection}
       />
    </div>
  );
}

Admin.propTypes = {
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onKegSelection: PropTypes.func.isRequired,
  selectedKeg: PropTypes.object,
};

export default Admin;
