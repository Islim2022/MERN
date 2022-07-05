import './App.css';
import Details from './views/Details';
import Main from './views/Main';
import Update from './views/Update';
import {BrowserRouter, Switch, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/product">
          <Main />
        </Route>
        <Route path="/product/:id">
          <Details />
        </Route>
        <Route path="/product/:id/edit">
          <Update />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>

  );
}

export default App;
