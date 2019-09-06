import React from 'react';
import { Button, Form, FormControl} from 'react-bootstrap'

function NavSearch(){

  return (
    <div>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-danger">Search</Button>
      </Form>
    </div>
  );
}

export default NavSearch;
