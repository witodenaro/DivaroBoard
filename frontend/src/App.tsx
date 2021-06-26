import { Switch, Route } from 'react-router-dom';

import './App.css';

import Board from './pages/Board/Board';
import EditTicket from './pages/EditTicket/EditTicket';

import Header from './components/Header/Header';

import { ROUTES } from './routes';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={ROUTES.EDIT_TICKET} component={EditTicket} />
        <Route exact path={ROUTES.HOME} component={Board} />
      </Switch>
    </div>
  );
}

export default App;
