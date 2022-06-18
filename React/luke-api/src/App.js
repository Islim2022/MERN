import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import People from './component/People';
import Planets from './component/Planets';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
          <Home />
          </Route>
          <Route path="/people/:id">
          <People />
          </Route>
          <Route exact path="/planets/:id">
          <Planets />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
