import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';


function KegList(props){
  var ListStyles = {
    backgroundColor: 'grey',
    paddingTop: '50px',
    paddingBottom: '50px',
    color: "White"
  }

  return (
    <div style={ListStyles}>
    <hr/>
    {props.kegList.map((keg, index) =>
        <Keg
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          flavor={keg.flavor}
          content={keg.content}
          key={index}
        />
      )}
    </div>
  );
} 

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;
