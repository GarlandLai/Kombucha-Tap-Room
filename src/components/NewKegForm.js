import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

function NewKegForm() {
  return(
    <div>
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
    </Row>
    </Form>
    </div>
    </div>
  );
}

export default NewKegForm
