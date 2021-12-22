import React from 'react';

const Subtitulo = (props) => {
    console.log (props.estado)

    return (
        <div>
        <h3>Tareas de la comisión {props.comision}</h3>
        </div>
    );
};

export default Subtitulo;