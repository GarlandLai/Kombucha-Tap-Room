import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Keg(props) {
  const kegInformation =
  <div>
    <h1>{props.name}</h1>
    <h3>{props.brand}</h3>
    <h3>{props.price}</h3>
    <h3>{props.flavor}</h3>
    <h4>{props.formattedWaitTime} ago</h4>
    <p><em>{props.content}</em></p>
  </div>;

  if (props.currentRouterPath === '/admin') {
    return (
      <div onClick={() => {props.onKegSelection({ name: props.name, brand: props.brand, price: props.price, flavor: props.flavor, content: props.content, formattedWaitTime: props.formattedWaitTime });}}>

      {kegInformation}
      </div>
    );
  } else {
    return (
      <div>
        {kegInformation}
      </div>
    );
  }
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  flavor: PropTypes.string,
  content: PropTypes.string,
  formattedWaitTime: PropTypes.string,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func,
};

export default Keg;
