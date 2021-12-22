//import de hojas de estilo
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
//import de componentes
import Subtitulo from './components/Subtitulo';
import Titulo from './components/Titulo';
import FormTareas from './components/FormTareas';


function App() {
  //esta es la zona donde va la lógica
//creo una variable "prueba"

let prueba = 123

  
  return (

  <section className="container">
    <Titulo  ></Titulo>
   {/*<Titulo/>*/}
   <Subtitulo comision = "comision18i" estado={true} prueba={prueba} /> 
    <hr />
    <FormTareas/>
  </section>
  );
}

export default App;
