import React from 'react';
import { Form, Row, Col, Button} from 'react-bootstrap';

function NewKegForm(props) {
  let _name = null;
  let _brand = null;
  let _price = null;
  let _flavor = null;
  let _description = null;

  var MyNewStyles = {
    backgroundColor: 'grey',
    paddingTop: '50px',
    paddingBottom: '50px',
  }

  function handleNewSubmit(event){
    event.preventDefault();
    console.log(_name.value);
    console.log(_brand.value);
    console.log(_price.value);
    console.log(_flavor.value);
    console.log(_description.value);
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _flavor.value = '';
    _description.value = '';
  }

  return(
    <div>
      <h1>Add New Kombucha Keg</h1>
    <div class="container"  style={MyNewStyles}>
    <Form onSubmit={handleNewSubmit}>
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
    <Form.Control type='text' id='description' placeholder="Description" ref={(input) => {_description = input;}}/>
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

export default NewKegForm
