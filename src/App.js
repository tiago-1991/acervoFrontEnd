import './App.css';
import BarraNavegacao from './componentes/BarraNavegacao';
import Home from './componentes/Home';
import Rodape from './componentes/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import ListaDiscos from './componentes/ListaDiscos';
import CreateUpdate from './componentes/CreateUpdate';

function App() {
  return (
    <div className="App">
      <Router>  
        <BarraNavegacao/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/discos" component={ListaDiscos}></Route>
          <Route path="/novoDisco/:id" component={CreateUpdate}></Route>
          
        </Switch>
        
        <Rodape/>
      </Router>
      </div>

  );
}

export default App;
