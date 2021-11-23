import './App.css';
import Contador from './components/Contador';
import Form from './components/Form';
import Hola from './components/Hola';
import Listado from './components/Listado';
import Temperatura from './components/Temperatura';

function App() {
  return (
    <div className="App">
      <Hola/>
      <Contador/>
      <Listado/>
      <Temperatura/>
      <Form/>
    </div>
  );
}

export default App;
