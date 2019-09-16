import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function EditKegForm(props) {
console.log(props.selectedKeg)
  var MyEditStyles = {
    backgroundColor: 'grey',
    paddingTop: '50px',
    paddingBottom: '50px',
  }

  return(
    <div style={MyEditStyles}>
      <h1>Edit Keg</h1>
      <br/>
    <div className="container">
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

EditKegForm.propTypes = {
  selectedKeg: PropTypes.object,
};

export default EditKegForm
