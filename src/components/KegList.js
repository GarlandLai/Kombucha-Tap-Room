import React from 'react';
import { Card, ListGroup } from 'react-bootstrap'
import Keg from './Keg'


var masterKegList = [
  {
    name: 'Strawberry Blast',
    brand: 'Kombucha Nation',
    price: 6,
    flavor: "Strawberry",
    content: 'Tart and full of flavor!'
  },
  {
    name: 'Refresh',
    brand: 'Kombucha Nation',
    price: 6,
    flavor: "Watermelon",
    content: 'This will quench you\'re thirst like no other!'
  },
  {
    name: 'Hydrate',
    brand: 'Kombucha Nation',
    price: 6,
    flavor: "Coconut",
    content: 'Low on electrolytes? Look no further than this 100% organic coconut water.'
  }
];

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
