import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
  var ListStyles = {
    backgroundColor: 'grey',
    paddingTop: '50px',
    paddingBottom: '50px',
    color: 'White',
  };
  console.log(props.kegList);
  return (
    <div style={ListStyles}>
    {props.kegList.map((keg) =>
        <Keg
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          flavor={keg.flavor}
          content={keg.content}
          pints={keg.pints}
          currentRouterPath={props.currentRouterPath}
          key={keg.id}
          onKegSelection={props.onKegSelection}
        />
      )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func,
};

export default KegList;
