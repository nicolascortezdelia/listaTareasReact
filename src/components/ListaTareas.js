import React from 'react';
import {ListGroup} from "react-bootstrap" 
import ItemTareas from './ItemTareas';

const ListaTareas = (props) => {
    
    return (
        <ListGroup>
            {
            props.stateTareas.map((valor, posicion)=>{return <ItemTareas key={posicion} nombretarea={valor} borrarTarea={props.borrarTarea}></ItemTareas>})
            }
            
</ListGroup>
    ); 
};

export default ListaTareas;