import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function EditKegForm(props) {
  console.log(props.selectedKeg.name);

  let _name = props.selectedKeg.name;
  let _brand = props.selectedKeg.brand;
  let _price = props.selectedKeg.price;
  let _flavor = props.selectedKeg.flavor;
  let _content = props.selectedKeg.content;

  var MyEditStyles = {
    backgroundColor: 'grey',
    paddingTop: '50px',
    paddingBottom: '50px',
  };

function handleUpdateSubmit(event){
    event.preventDefault();
    console.log(_name.value);
    console.log(_brand.value);
    console.log(_price.value);
    console.log(_flavor.value);
    console.log(_content.value);
    props.onUpdateKeg({ name: _name.value, brand: _brand.value, price: _price.value, flavor: _flavor.value, content: _content.value });
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _flavor.value = '';
    _content.value = '';
  }


  return(
    <div style={MyEditStyles}>
      <h1>Edit Keg</h1>
      <br/>
    <div className="container">
    <Form onSubmit={handleUpdateSubmit}>
    <Row>
    <Col>
    <Form.Control placeholder={props.selectedKeg.name} />
    </Col>
    <Col>
    <Form.Control placeholder={props.selectedKeg.brand} />
    </Col>
    <Col>
    <Form.Control placeholder={props.selectedKeg.price} />
    </Col>
    <Col>
    <Form.Control placeholder={props.selectedKeg.flavor}/>
    </Col>
    </Row>
    <br/>
    <Row>
    <Col>
    <Form.Control placeholder={props.selectedKeg.content} />
    </Col>
    <Button variant="primary" type="submit">
    Update
  </Button>
    </Row>
    </Form>
    </div>
    </div>
  );
}

EditKegForm.propTypes = {
  selectedKeg: PropTypes.object,
  onUpdateKeg: PropTypes.func,
};

export default EditKegForm;
