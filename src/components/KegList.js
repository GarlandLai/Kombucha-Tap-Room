import React from 'react';
import { Card, ListGroup } from 'react-bootstrap'
import Keg from './Keg'


function KegList(props){
  var ListStyles = {
    backgroundColor: 'grey',
    paddingTop: '50px',
    paddingBottom: '50px',
    color: "White"
  }
  return (
    <div style={ListStyles}>
    {masterKegList.map((keg, index) =>
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

export default KegList;
