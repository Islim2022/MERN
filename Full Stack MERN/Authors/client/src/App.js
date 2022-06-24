
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Create from './views/Create';
import Home from './views/Home';
import Edit from './views/Edit';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path ="/authors">
            <Home />
          </Route>
          <Route exact path="/authors/new">
            <Create />
          </Route>
          <Route path="/authors/:id/edit">
            <Edit />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
