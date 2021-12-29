import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import ListaTareas from './ListaTareas';
//otra opción para importar, más simple
//import {Form, Button} from "react-bootstrap"

const FormTareas = () => {
  //aquí va la lógica
  const [arregloTareas, setArregloTareas] = useState([]);
  const [tarea, setTarea] = useState("");

  

//crear funciones
const handleSubmit = (e)=>{
  e.preventDefault();
  //guardar una tarea en el arregloTareas
  //utilizamos el operador spread
  setArregloTareas([...arregloTareas,tarea]);
  //limpiar el input
  //e.target.reset
  setTarea("");

}

const borrarTarea = (nombre)=>{
  let arregloModificado = arregloTareas.filter((item)=>{return item !== nombre})
  setArregloTareas(arregloModificado);
}

    return (
        <div>
           <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3 d-flex">
    
    <Form.Control type="text" placeholder="Ingrese una tarea" onChange={(e)=>setTarea(e.target.value)} value={tarea}/>
    <Button variant="primary" type="submit">
    Agregar
  </Button>
  </Form.Group>
  <ListaTareas stateTareas={arregloTareas} borrarTarea={borrarTarea}/>
 
  
</Form> 
        </div>
    );
};

export default FormTareas;