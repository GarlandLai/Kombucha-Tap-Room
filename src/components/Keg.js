import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Keg(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.brand}</h3>
      <h3>{props.price}</h3>
      <h3>{props.flavor}</h3>
      <h4>{props.formattedWaitTime} ago</h4>
      <p><em>{props.content}</em></p>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  flavor: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  formattedWaitTime: PropTypes.string.isRequired,
};

export default Keg;
