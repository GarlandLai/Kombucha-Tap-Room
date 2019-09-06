import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

function EditKegForm(props) {

  var MyEditStyles = {
    backgroundColor: 'grey',
    paddingTop: '50px',
    paddingBottom: '50px',
  }

  return(
    <div style={MyEditStyles}>
    <div class="container">
    <Form>
    <Row>
    <Col>
    <Form.Control placeholder="Name" />
    </Col>
    <Col>
    <Form.Control placeholder="Brand" />
    </Col>
    <Col>
    <Form.Control placeholder="Price" />
    </Col>
    <Col>
    <Form.Control placeholder="Flavor" />
    </Col>
    </Row>
    <br/>
    <Row>
    <Col>
    <Form.Control placeholder="Description" />
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

export default EditKegForm
