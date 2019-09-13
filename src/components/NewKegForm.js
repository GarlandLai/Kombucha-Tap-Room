import React from 'react';
import { Form, Row, Col, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

function NewKegForm(props) {
  let _name = null;
  let _brand = null;
  let _price = null;
  let _flavor = null;
  let _content = null;

  var MyNewStyles = {
    backgroundColor: 'grey',
    paddingTop: '50px',
    paddingBottom: '50px',
  }

  function handleNewKegFormSubmission(event){
    event.preventDefault();
    console.log(_name.value);
    console.log(_brand.value);
    console.log(_price.value);
    console.log(_flavor.value);
    console.log(_content.value);
    props.onNewKegCreation({name: _name.value, brand: _brand.value, price: _price.value, flavor: _flavor.value, content: _content.value})
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _flavor.value = '';
    _content.value = '';
  }

  return(
    <div>
      <h1>Add New Kombucha Keg</h1>
      <div class="container"  style={MyNewStyles}>
        <Form onSubmit={handleNewKegFormSubmission}>
          <Row>
            <Col>
              <Form.Control type='text' id='name' placeholder="Name" ref={(input) => {_name = input;}}/>
            </Col>
            <Col>
              <Form.Control type='text' id='brand' placeholder="Brand" ref={(input) => {_brand = input;}}/>
            </Col>
            <Col>
              <Form.Control type='text' id='price' placeholder="Price" ref={(input) => {_price = input;}}/>
            </Col>
            <Col>
              <Form.Control type='text' id='flavor' placeholder="Flavor" ref={(input) => {_flavor = input;}}/>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <Form.Control type='text' id='content' placeholder="Description" ref={(input) => {_content = input;}}/>
            </Col>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Row>
        </Form>
      </div>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};


export default NewKegForm;
