import './App.css';
import Subtitulo from './components/Subtitulo';
import Titulo from './components/Titulo';


function App() {
  //esta es la zona donde va la lógica
//creo una variable "prueba"

let prueba = 123

  
  return (

  <section>
    <Titulo  ></Titulo>
   {/*<Titulo/>*/}
   <Subtitulo comision = "comision18i" estado={true} prueba={prueba} /> 
    <hr />
  </section>
  );
}

export default App;
