import React from 'react';
import { Button, Form, FormControl} from 'react-bootstrap'

function NavSearch(){

  return (
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-danger">Search</Button>
    </Form>
  );
}

export default NavSearch;
