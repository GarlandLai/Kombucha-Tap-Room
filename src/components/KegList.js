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
    name: 'Strawberry Blast',
    brand: 'Kombucha Nation',
    price: 6,
    flavor: "Strawberry",
    content: 'Tart and full of flavor!'
  },
  {
    name: 'Strawberry Blast',
    brand: 'Kombucha Nation',
    price: 6,
    flavor: "Strawberry",
    content: 'Tart and full of flavor!'
  }
];


function KegList(){
  return (
    <div>
    <hr/>
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
