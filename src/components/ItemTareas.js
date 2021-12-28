import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ItemTareas = (props) => {
    return (
        <ListGroup.Item>{props.nombretarea}</ListGroup.Item>
    );
};

export default ItemTareas;