import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from './components/Welcome';
import Word from './components/Word';
import Number from './components/Number';
import WithStyle from './components/WithStyle';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Welcome />
          </Route>
          <Route exact path="/:param">
            <Word />
          </Route>
          <Route exact path="/:param">
            <Number />
          </Route>
          <Route path="/:word/:textColor/:bColor">
            <WithStyle />
          </Route>
        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
