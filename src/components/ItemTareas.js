import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const ItemTareas = (props) => {
    return (
        <ListGroup.Item className='d-flex justify-content-between'>{props.nombretarea} <Button variant="danger" type="button" onClick={()=>props.borrarTarea(props.nombretarea)}> Borrar </Button> </ListGroup.Item>

    );
};

export default ItemTareas;