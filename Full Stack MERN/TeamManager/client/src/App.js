
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddPlayer from './views/AddPlayer';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerList from './components/PlayerList';
import TeamStatus from './views/TeamStatus'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/players/addPlayer">
          <AddPlayer />
          </Route>
          <Route exact path="/players/list">
          <PlayerList />
          </Route>
          <Route exact path="/status/game/:id">
            <TeamStatus />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
