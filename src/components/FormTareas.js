import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import ListaTareas from './ListaTareas';
//otra opción para importar, más simple
//import {Form, Button} from "react-bootstrap"

const FormTareas = () => {
    return (
        <div>
           <Form>
  <Form.Group className="mb-3 d-flex">
    
    <Form.Control type="text" placeholder="Ingrese una tarea" />
    <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form.Group>
  <ListaTareas/>
 
  
</Form> 
        </div>
    );
};

export default FormTareas;