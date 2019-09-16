import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';
import EditKegForm from './EditKegForm';

function Admin(props) {
  return (
    <div>
    <KegList
      kegList={props.kegList}
      currentRouterPath={props.currentRouterPath} />
    </div>
  );
}

Admin.propTypes = {
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
};

export default Admin;
